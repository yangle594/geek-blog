<template>
  <section class="space-y-8">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-mono">博客</h1>
      <SearchBox />
    </div>
    <div class="grid md:grid-cols-2 gap-6">
      <PostList />
    </div>
  </section>
</template>

<script setup lang="ts">
import PostList from '~/components/PostList.vue'
import SearchBox from '~/components/SearchBox.vue'
</script>

