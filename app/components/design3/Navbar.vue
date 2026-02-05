<script setup lang="ts">
const navLinks = [
  { name: 'Roster', href: '/3/roster' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Blog', href: '/3/blog' },
]
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50">
    <div class="max-w-7xl mx-auto px-6 py-6">
      <div class="flex items-center justify-between">
        <!-- Hamburger Menu (Left) -->
        <button class="text-white/80 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <!-- Logo (Center) -->
        <NuxtLink to="/3" class="absolute left-1/2 -translate-x-1/2 text-white font-light text-lg tracking-[0.4em] uppercase">
          EATHERLAND
        </NuxtLink>

        <!-- Navigation Links (Right) -->
        <div class="flex items-center gap-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.href"
            class="text-white/70 hover:text-white text-xs uppercase tracking-[0.2em] transition-colors hidden md:block"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>
