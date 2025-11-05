<template>
  <div class="min-h-dvh grid grid-rows-[auto,1fr,auto]">
    <header class="border-b border-white/10 sticky top-0 z-50 bg-background/70 backdrop-blur">
      <div class="container-g flex items-center justify-between h-14">
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <Icon name="ph:alien-duotone" class="w-6 h-6 text-accent" />
          <span class="font-mono tracking-wide group-hover:text-accent transition">yangle · blog</span>
        </NuxtLink>
        <nav class="flex items-center gap-4">
          <NuxtLink to="/blog" class="hover:text-accent">Blog</NuxtLink>
          <NuxtLink to="/projects" class="hover:text-accent">Projects</NuxtLink>
          <NuxtLink to="/tags" class="hover:text-accent">Tags</NuxtLink>
          <NuxtLink to="/about" class="hover:text-accent">About</NuxtLink>
          <NuxtLink to="/search" class="hover:text-accent" aria-label="Search">
            <Icon name="ph:magnifying-glass-duotone" class="w-5 h-5" />
          </NuxtLink>
          <a href="https://github.com/yangle594" target="_blank" rel="noreferrer" class="hover:text-accent" aria-label="GitHub">
            <Icon name="ph:github-logo-duotone" class="w-5 h-5" />
          </a>
        </nav>
      </div>
    </header>

    <main class="container-g py-8">
      <slot />
    </main>

    <footer class="border-t border-white/10 py-6 text-sm text-white/60">
      <div class="container-g flex items-center justify-between">
        <p>© {{ new Date().getFullYear() }} yangle · Crafted with Nuxt</p>
        <div class="flex items-center gap-3">
          <a href="/rss.xml" class="hover:text-accent">RSS</a>
          <a href="https://github.com/yangle594" target="_blank" rel="noreferrer" class="hover:text-accent">GitHub</a>
        </div>
      </div>
    </footer>
  </div>
</template>

