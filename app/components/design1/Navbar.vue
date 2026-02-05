<script setup lang="ts">
const navLinks = [
  { name: 'Roster', href: '/1/roster' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Blog', href: '/1/blog' },
]
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
    <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/1" class="text-white font-bold text-xl tracking-wider">
          EATHERLAND
        </NuxtLink>

        <!-- Navigation Links (Center) -->
        <div class="hidden md:flex items-center gap-10">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.href"
            class="text-gray-300 hover:text-white text-sm uppercase tracking-widest transition-colors"
          >
            {{ link.name }}
          </NuxtLink>
        </div>

        <!-- Right Section -->
        <div class="flex items-center gap-6">
          <!-- Search Icon -->
          <button class="text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <!-- CTA Button -->
          <NuxtLink
            to="#contact"
            class="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
          >
            Contact Us
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>
