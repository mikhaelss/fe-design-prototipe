<script setup lang="ts">
const navLinks = [
  { name: 'Roster', href: '/2/roster' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Blog', href: '/2/blog' },
]
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-red-600">
    <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/2" class="text-white font-black text-xl tracking-tight uppercase italic">
          EATHERLAND
        </NuxtLink>

        <!-- Navigation Links (Center) -->
        <div class="hidden md:flex items-center gap-10">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.href"
            class="text-white/90 hover:text-white text-sm font-medium uppercase tracking-wider transition-colors"
          >
            {{ link.name }}
          </NuxtLink>
        </div>

        <!-- CTA Button -->
        <NuxtLink
          to="#contact"
          class="bg-black hover:bg-gray-900 text-white px-6 py-2.5 text-sm font-bold uppercase tracking-wider transition-colors rounded-md"
        >
          Contact
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
