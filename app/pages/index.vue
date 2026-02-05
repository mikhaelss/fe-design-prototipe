<script setup lang="ts">
useSeoMeta({
  title: 'EATHERLAND INC. - Music Publishing',
  description: 'EATHERLAND INC. - Premier music publishing company',
})
</script>

<template>
  <div class="min-h-screen bg-gray-900 flex items-center justify-center">
    <div class="text-center text-white">
      <h1 class="text-4xl font-bold mb-8">EATHERLAND INC.</h1>
      <p class="text-gray-400 mb-12">Select a design prototype</p>
      <div class="flex gap-6">
        <NuxtLink
          to="/1"
          class="px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors"
        >
          Design 1 - Minimalist Cinematic
        </NuxtLink>
        <NuxtLink
          to="/2"
          class="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
        >
          Design 2 - Bold Studio
        </NuxtLink>
        <NuxtLink
          to="/3"
          class="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-lg transition-colors"
        >
          Design 3 - Experimental Artistic
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
