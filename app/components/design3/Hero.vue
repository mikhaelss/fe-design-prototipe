<script setup lang="ts">
const panels = [
  {
    id: 1,
    initial: 'FY',
    subtitle: 'CHROMATIC',
    title: 'SILVER',
    titleLine2: 'SPACE',
    category1: 'SOUNDSCAPES',
    label1: 'BACKBEATS',
    category2: 'VOCAL STORIES',
    label2: 'MELODIES',
    gradient: 'from-pink-500 via-rose-500 to-fuchsia-600',
    image: 'https://picsum.photos/seed/singer1/600/800',
  },
  {
    id: 2,
    initial: 'A',
    subtitle: 'FLUID, ABSTRACT',
    title: 'NEON',
    titleLine2: 'DREAMS',
    category1: 'PATTERNS',
    label1: 'NEURONAL',
    gradient: 'from-indigo-600 via-blue-600 to-cyan-500',
    image: 'https://picsum.photos/seed/band1/600/800',
  },
  {
    id: 3,
    initial: 'W',
    subtitle: 'ODIN DESIGN',
    title: 'DARK',
    titleLine2: 'MATTER',
    category1: 'TOOLS',
    label1: 'WORKDESK',
    gradient: 'from-gray-800 via-gray-900 to-black',
    image: 'https://picsum.photos/seed/artist3/600/800',
  },
]

const activePanel = ref(0)

const setActivePanel = (index: number) => {
  activePanel.value = index
}

const getPanelWidth = (index: number) => {
  if (activePanel.value === index) {
    return 'flex-[2]'
  }
  return 'flex-1'
}
</script>

<template>
  <section class="min-h-screen relative overflow-hidden">
    <!-- Split Panels -->
    <div class="flex h-screen">
      <!-- Panel 1 - Pink/Fuchsia -->
      <div
        class="relative overflow-hidden cursor-pointer transition-all duration-700 ease-out bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-600"
        :class="getPanelWidth(0)"
        @click="setActivePanel(0)"
      >
        <!-- Image -->
        <div class="absolute inset-0">
          <img
            :src="panels[0].image"
            alt="Artist"
            class="w-full h-full object-cover opacity-60"
          />
          <div class="absolute inset-0 bg-gradient-to-br from-pink-500/70 via-rose-500/50 to-fuchsia-600/70"></div>
        </div>

        <!-- Content -->
        <div class="absolute top-24 left-8 text-white z-10">
          <p class="text-sm tracking-[0.3em] opacity-90 font-medium">FY</p>
          <p class="text-[10px] tracking-[0.2em] opacity-60 mt-1">CHROMATIC</p>
        </div>

        <!-- Title -->
        <div
          class="absolute bottom-32 left-8 text-white transition-all duration-500 z-10"
          :class="activePanel === 0 ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-0'"
        >
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider leading-none">
            SILVER<br>SPACE
          </h2>
        </div>

        <!-- Bottom Categories -->
        <div
          class="absolute bottom-8 left-8 right-8 flex justify-between text-white text-[10px] tracking-[0.2em] transition-all duration-500 z-10"
          :class="activePanel === 0 ? 'opacity-100' : 'opacity-60'"
        >
          <div>
            <p class="opacity-60">SOUNDSCAPES</p>
            <p class="font-medium mt-1">BACKBEATS</p>
          </div>
          <div class="text-right">
            <p class="opacity-60">VOCAL STORIES</p>
            <p class="font-medium mt-1">MELODIES</p>
          </div>
        </div>
      </div>

      <!-- Panel 2 - Blue/Indigo -->
      <div
        class="relative overflow-hidden cursor-pointer transition-all duration-700 ease-out bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500"
        :class="getPanelWidth(1)"
        @click="setActivePanel(1)"
      >
        <!-- Image -->
        <div class="absolute inset-0">
          <img
            :src="panels[1].image"
            alt="Band"
            class="w-full h-full object-cover opacity-60"
          />
          <div class="absolute inset-0 bg-gradient-to-br from-indigo-600/70 via-blue-600/50 to-cyan-500/70"></div>
        </div>

        <!-- Content -->
        <div class="absolute top-24 left-1/2 -translate-x-1/2 text-white text-center z-10">
          <p class="text-2xl font-light tracking-[0.3em]">A</p>
          <p class="text-[10px] tracking-[0.2em] opacity-60 mt-2">FLUID, ABSTRACT</p>
        </div>

        <!-- Title -->
        <div
          class="absolute bottom-32 left-8 text-white transition-all duration-500 z-10"
          :class="activePanel === 1 ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-0'"
        >
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider leading-none">
            NEON<br>DREAMS
          </h2>
        </div>

        <!-- Bottom Categories -->
        <div
          class="absolute bottom-8 left-8 text-white text-[10px] tracking-[0.2em] transition-all duration-500 z-10"
          :class="activePanel === 1 ? 'opacity-100' : 'opacity-60'"
        >
          <p class="opacity-60">PATTERNS</p>
          <p class="font-medium mt-1">NEURONAL</p>
        </div>
      </div>

      <!-- Panel 3 - Dark/Black -->
      <div
        class="relative overflow-hidden cursor-pointer transition-all duration-700 ease-out bg-gradient-to-br from-gray-800 via-gray-900 to-black"
        :class="getPanelWidth(2)"
        @click="setActivePanel(2)"
      >
        <!-- Image -->
        <div class="absolute inset-0">
          <img
            :src="panels[2].image"
            alt="Artist"
            class="w-full h-full object-cover opacity-50"
          />
          <div class="absolute inset-0 bg-gradient-to-br from-gray-800/80 via-gray-900/70 to-black/80"></div>
        </div>

        <!-- Content -->
        <div class="absolute top-24 right-8 text-white text-right z-10">
          <p class="text-2xl font-light tracking-[0.3em]">W</p>
          <p class="text-[10px] tracking-[0.2em] opacity-60 mt-2">ODIN DESIGN</p>
        </div>

        <!-- Title -->
        <div
          class="absolute bottom-32 left-8 text-white transition-all duration-500 z-10"
          :class="activePanel === 2 ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-0'"
        >
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider leading-none">
            DARK<br>MATTER
          </h2>
        </div>

        <!-- Bottom Categories -->
        <div
          class="absolute bottom-8 right-8 text-white text-[10px] tracking-[0.2em] text-right transition-all duration-500 z-10"
          :class="activePanel === 2 ? 'opacity-100' : 'opacity-60'"
        >
          <p class="opacity-60">TOOLS</p>
          <p class="font-medium mt-1">WORKDESK</p>
        </div>
      </div>
    </div>
  </section>
</template>
