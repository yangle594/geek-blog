<template>
  <section class="space-y-10">
    <div class="glass p-8 md:p-12">
      <div class="flex items-start justify-between gap-6">
        <div class="space-y-3">
          <h1 class="text-3xl md:text-4xl font-mono">Hello, I am <span class="text-accent">Yangle</span>.</h1>
          <p class="text-white/70 max-w-2xl">极客风格 · 简洁大气 · 新颖。这里记录我的技术洞见、工程实践与成长笔记。</p>
          <div class="flex gap-3 pt-2">
            <NuxtLink to="/blog" class="btn-primary">阅读博客<Icon name="ph:arrow-right"/></NuxtLink>
            <NuxtLink to="/projects" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/15 hover:border-accent/50 transition">项目</NuxtLink>
          </div>
        </div>
        <Icon name="ph:terminal-window-duotone" class="w-16 h-16 text-accent/80 hidden md:block" />
      </div>
    </div>

    <section>
      <div class="flex items-center justify-between mb-4">
        <h2 class="font-mono text-xl">最新文章</h2>
        <NuxtLink to="/blog" class="text-white/60 hover:text-accent">查看全部</NuxtLink>
      </div>
      <div class="grid md:grid-cols-2 gap-6">
        <PostList :limit="4" />
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import PostList from '~/components/PostList.vue'
</script>

