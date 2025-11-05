<script setup lang="ts">
interface Props { limit?: number; query?: string }
const props = withDefaults(defineProps<Props>(), { limit: 0, query: '' })

const { data: posts } = await useAsyncData('posts-' + props.query + '-' + props.limit, async () => {
  const q = queryContent('/blog')
    .where({ _partial: false })
    .only(['_path', 'title', 'description', 'date', 'tags'])
    .sort({ date: -1 })

  if (props.query) {
    q.where({ $or: [
      { title: { $regex: props.query, $options: 'i' } },
      { description: { $regex: props.query, $options: 'i' } },
      { tags: { $contains: props.query } }
    ] })
  }

  if (props.limit && props.limit > 0) {
    q.limit(props.limit)
  }
  return q.find()
})
</script>

<template>
  <div v-if="posts?.length" class="contents">
    <NuxtLink v-for="post in posts" :key="post._path" :to="post._path" class="glass p-6 hover:border-accent/50 transition block">
      <h3 class="font-mono text-lg mb-1">{{ post.title }}</h3>
      <p class="text-white/70 line-clamp-2">{{ post.description }}</p>
      <div class="mt-3 text-sm text-white/60 flex items-center gap-3">
        <span>{{ post.date && new Date(post.date).toLocaleDateString() }}</span>
        <span class="flex gap-2">
          <span v-for="t in post.tags || []" :key="t" class="px-2 py-0.5 rounded bg-white/10">#{{ t }}</span>
        </span>
      </div>
    </NuxtLink>
  </div>
  <div v-else class="text-white/60">暂无文章。</div>
  
</template>

