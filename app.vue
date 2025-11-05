<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <ClientOnly>
    <ColorScheme placeholder="">
      <div />
    </ColorScheme>
  </ClientOnly>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator color="#00e5a8" />
  <style>
    :root { color-scheme: dark; }
  </style>
</template>

<script setup lang="ts">
import 'assets/css/tailwind.css'
</script>

