<script setup lang="ts">
defineProps<{ large?: boolean }>()
const router = useRouter()
const route = useRoute()
const q = ref<string>((route.query.q as string) || '')

function onSubmit() {
  router.push({ path: '/search', query: q.value ? { q: q.value } : {} })
}
</script>

<template>
  <form @submit.prevent="onSubmit" :class="['w-full', large ? 'max-w-2xl' : 'max-w-sm']">
    <div class="flex items-center gap-2 glass px-3 py-2">
      <Icon name="ph:magnifying-glass-duotone" class="w-5 h-5 text-white/60" />
      <input v-model="q" type="search" placeholder="搜索标题 / 描述 / 标签" class="bg-transparent outline-none flex-1 placeholder:text-white/40" />
      <button class="text-white/60 hover:text-accent" aria-label="Search">
        <Icon name="ph:arrow-right" />
      </button>
    </div>
  </form>
</template>

