<template>
  <article class="prose prose-invert max-w-none">
    <ContentDoc>
      <template #not-found>
        <div class="glass p-8">
          <h1>未找到文章</h1>
          <p>你访问的文章不存在或已被移动。</p>
          <NuxtLink to="/blog" class="btn-primary mt-4 inline-block">返回博客</NuxtLink>
        </div>
      </template>
    </ContentDoc>
  </article>
</template>

