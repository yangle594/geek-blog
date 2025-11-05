<script setup lang="ts">
const { data: tags } = await useAsyncData('tags', async () => {
  const all = await queryContent('/blog').only(['tags']).find()
  const counts = new Map<string, number>()
  for (const item of all) {
    for (const t of (item.tags as string[] | undefined) || []) {
      counts.set(t, (counts.get(t) || 0) + 1)
    }
  }
  return Array.from(counts.entries()).sort((a,b) => b[1]-a[1])
})
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <NuxtLink
      v-for="[name, count] in tags || []"
      :key="name"
      :to="{ path: '/blog', query: { tag: name } }"
      class="px-3 py-1 rounded-full bg-white/10 hover:bg-accent/20 border border-white/10 hover:border-accent/40 transition"
    >
      <span class="font-mono">#{{ name }}</span>
      <span class="text-white/60 ml-1">{{ count }}</span>
    </NuxtLink>
  </div>
</template>

