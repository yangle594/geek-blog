<template>
  <section class="space-y-6">
    <h1 class="text-2xl font-mono">搜索</h1>
    <SearchBox large />
    <div class="grid md:grid-cols-2 gap-6">
      <PostList :query="q" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import PostList from '~/components/PostList.vue'
import SearchBox from '~/components/SearchBox.vue'

const route = useRoute()
const q = computed(() => (route.query.q as string) || '')
</script>

