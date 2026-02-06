<script setup lang="ts">
// Images for the diagonal grid - all same height, different widths/orientations
// Types: portrait (tall), square (1:1), landscape (wide), stacked (2 images)
const gridItems = [
  { id: 1, type: 'portrait', image: 'https://picsum.photos/seed/music1/300/500' },
  { id: 2, type: 'square', image: 'https://picsum.photos/seed/music2/400/400' },
  {
    id: 3,
    type: 'stacked',
    images: [
      'https://picsum.photos/seed/music3a/300/245',
      'https://picsum.photos/seed/music3b/300/245'
    ]
  },
  { id: 4, type: 'landscape', image: 'https://picsum.photos/seed/music4/600/400' },
  { id: 5, type: 'portrait', image: 'https://picsum.photos/seed/music5/300/500' },
  { id: 6, type: 'square', image: 'https://picsum.photos/seed/music6/400/400' },
  {
    id: 7,
    type: 'stacked',
    images: [
      'https://picsum.photos/seed/music7a/300/245',
      'https://picsum.photos/seed/music7b/300/245'
    ]
  },
  { id: 8, type: 'landscape', image: 'https://picsum.photos/seed/music8/600/400' },
  { id: 9, type: 'portrait', image: 'https://picsum.photos/seed/music9/300/500' },
  { id: 10, type: 'square', image: 'https://picsum.photos/seed/music10/400/400' },
]

// Create rows with duplicates for seamless scroll
const row1 = [...gridItems, ...gridItems, ...gridItems]
const row2 = [...gridItems.slice(5), ...gridItems.slice(0, 5), ...gridItems.slice(5), ...gridItems.slice(0, 5), ...gridItems]
const row3 = [...gridItems.slice(3), ...gridItems.slice(0, 3), ...gridItems.slice(3), ...gridItems.slice(0, 3), ...gridItems]

// Get width class based on type (all same height)
const getWidthClass = (type: string) => {
  switch (type) {
    case 'portrait':
      return 'w-44 md:w-52 lg:w-60'
    case 'square':
      return 'w-56 md:w-64 lg:w-72'
    case 'landscape':
      return 'w-72 md:w-80 lg:w-96'
    case 'stacked':
      return 'w-44 md:w-52 lg:w-60'
    default:
      return 'w-44 md:w-52 lg:w-60'
  }
}
</script>

<template>
  <section class="min-h-screen bg-red-600 relative overflow-hidden">
    <!-- Diagonal Grid Background -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Rotated container for diagonal effect -->
      <div class="diagonal-grid absolute -inset-[50%] w-[200%] h-[200%] flex flex-col justify-center -rotate-12 origin-center">
        <!-- Row 1 -->
        <div class="marquee-row flex items-end gap-3 md:gap-4 mb-3 md:mb-4">
          <div class="marquee-content flex items-end gap-3 md:gap-4 animate-scroll-right">
            <template v-for="(item, index) in row1" :key="`r1-${index}`">
              <!-- Single image (portrait, square, landscape) -->
              <div
                v-if="item.type !== 'stacked'"
                class="flex-shrink-0 h-64 md:h-72 lg:h-80 overflow-hidden shadow-lg"
                :class="getWidthClass(item.type)"
              >
                <img :src="item.image" :alt="`Image ${index}`" class="w-full h-full object-cover" />
              </div>
              <!-- Stacked images -->
              <div
                v-else
                class="flex-shrink-0 h-64 md:h-72 lg:h-80 flex flex-col gap-2"
                :class="getWidthClass(item.type)"
              >
                <div class="flex-1 overflow-hidden">
                  <img :src="item.images?.[0]" :alt="`Image ${index}-1`" class="w-full h-full object-cover" />
                </div>
                <div class="flex-1 overflow-hidden">
                  <img :src="item.images?.[1]" :alt="`Image ${index}-2`" class="w-full h-full object-cover" />
                </div>
              </div>
            </template>
          </div>
          <div class="marquee-content flex items-end gap-3 md:gap-4 animate-scroll-right" aria-hidden="true">
            <template v-for="(item, index) in row1" :key="`r1-dup-${index}`">
              <div
                v-if="item.type !== 'stacked'"
                class="flex-shrink-0 h-64 md:h-72 lg:h-80 overflow-hidden shadow-lg"
                :class="getWidthClass(item.type)"
              >
                <img :src="item.image" :alt="`Image ${index}`" class="w-full h-full object-cover" />
              </div>
              <div
                v-else
                class="flex-shrink-0 h-64 md:h-72 lg:h-80 flex flex-col gap-2"
                :class="getWidthClass(item.type)"
              >
                <div class="flex-1 overflow-hidden">
                  <img :src="item.images?.[0]" :alt="`Image ${index}-1`" class="w-full h-full object-cover" />
                </div>
                <div class="flex-1 overflow-hidden">
                  <img :src="item.images?.[1]" :alt="`Image ${index}-2`" class="w-full h-full object-cover" />
                </div>
              </div>
            </template>
          </div>
        </div>

        <!-- Row 2 -->
        <div class="marquee-row flex items-end gap-3 md:gap-4 mb-3 md:mb-4">
          <div class="marquee-content flex items-end gap-3 md:gap-4 animate-scroll-left">
            <template v-for="(item, index) in row2" :key="`r2-${index}`">
              <div
                v-if="item.type !== 'stacked'"
                class="flex-shrink-0 h-64 md:h-72 lg:h-80 overflow-hidden shadow-lg"
                :class="getWidthClass(item.type)"
              >
                <img :src="item.image" :alt="`Image ${index}`" class="w-full h-full object-cover" />
              </div>
              <div
                v-else
                class="flex-shrink-0 h-64 md:h-72 lg:h-80 flex flex-col gap-2"
                :class="getWidthClass(item.type)"
              >
                <div class="flex-1 overflow-hidden">
                  <img :src="item.images?.[0]" :alt="`Image ${index}-1`" class="w-full h-full object-cover" />
                </div>
                <div class="flex-1 overflow-hidden">
                  <img :src="item.images?.[1]" :alt="`Image ${index}-2`" class="w-full h-full object-cover" />
                </div>
              </div>
            </template>
          </div>
          <div class="marquee-content flex items-end gap-3 md:gap-4 animate-scroll-left" aria-hidden="true">
            <template v-for="(item, index) in row2" :key="`r2-dup-${index}`">
              <div
                v-if="item.type !== 'stacked'"
                class="flex-shrink-0 h-64 md:h-72 lg:h-80 overflow-hidden shadow-lg"
                :class="getWidthClass(item.type)"
              >
                <img :src="item.image" :alt="`Image ${index}`" class="w-full h-full object-cover" />
              </div>
              <div
                v-else
                class="flex-shrink-0 h-64 md:h-72 lg:h-80 flex flex-col gap-2"
                :class="getWidthClass(item.type)"
              >
                <div class="flex-1 overflow-hidden">
                  <img :src="item.images?.[0]" :alt="`Image ${index}-1`" class="w-full h-full object-cover" />
                </div>
                <div class="flex-1 overflow-hidden">
                  <img :src="item.images?.[1]" :alt="`Image ${index}-2`" class="w-full h-full object-cover" />
                </div>
              </div>
            </template>
          </div>
        </div>

        <!-- Row 3 -->
        <div class="marquee-row flex items-end gap-3 md:gap-4">
          <div class="marquee-content flex items-end gap-3 md:gap-4 animate-scroll-right-slow">
            <template v-for="(item, index) in row3" :key="`r3-${index}`">
              <div
                v-if="item.type !== 'stacked'"
                class="flex-shrink-0 h-64 md:h-72 lg:h-80 overflow-hidden shadow-lg"
                :class="getWidthClass(item.type)"
              >
                <img :src="item.image" :alt="`Image ${index}`" class="w-full h-full object-cover" />
              </div>
              <div
                v-else
                class="flex-shrink-0 h-64 md:h-72 lg:h-80 flex flex-col gap-2"
                :class="getWidthClass(item.type)"
              >
                <div class="flex-1 overflow-hidden">
                  <img :src="item.images?.[0]" :alt="`Image ${index}-1`" class="w-full h-full object-cover" />
                </div>
                <div class="flex-1 overflow-hidden">
                  <img :src="item.images?.[1]" :alt="`Image ${index}-2`" class="w-full h-full object-cover" />
                </div>
              </div>
            </template>
          </div>
          <div class="marquee-content flex items-end gap-3 md:gap-4 animate-scroll-right-slow" aria-hidden="true">
            <template v-for="(item, index) in row3" :key="`r3-dup-${index}`">
              <div
                v-if="item.type !== 'stacked'"
                class="flex-shrink-0 h-64 md:h-72 lg:h-80 overflow-hidden shadow-lg"
                :class="getWidthClass(item.type)"
              >
                <img :src="item.image" :alt="`Image ${index}`" class="w-full h-full object-cover" />
              </div>
              <div
                v-else
                class="flex-shrink-0 h-64 md:h-72 lg:h-80 flex flex-col gap-2"
                :class="getWidthClass(item.type)"
              >
                <div class="flex-1 overflow-hidden">
                  <img :src="item.images?.[0]" :alt="`Image ${index}-1`" class="w-full h-full object-cover" />
                </div>
                <div class="flex-1 overflow-hidden">
                  <img :src="item.images?.[1]" :alt="`Image ${index}-2`" class="w-full h-full object-cover" />
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- Overlay for text visibility -->
    <div class="absolute inset-0 bg-red-900/20"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 py-20 pt-32 min-h-screen flex items-center">
      <div class="max-w-xl">
        <p class="text-black font-bold text-sm uppercase tracking-widest mb-6">Music Publishing</p>
        <h1 class="text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] mb-8 uppercase tracking-tighter">
          BOLD<br>
          <span class="text-black">SOUNDS</span>
        </h1>
        <p class="text-white/90 text-lg max-w-md mb-10 leading-relaxed">
          We amplify voices that demand to be heard. Join the roster of artists shaping the future of music.
        </p>
        <div class="flex gap-4">
          <NuxtLink
            to="/2/roster"
            class="bg-black text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors"
          >
            View Roster
          </NuxtLink>
          <NuxtLink
            to="#about"
            class="border-2 border-black text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
          >
            Learn More
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Vertical Text -->
    <div class="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:block z-10">
      <p class="text-black/80 font-black text-xs uppercase tracking-widest transform -rotate-90 origin-center whitespace-nowrap">
        Est. 2024 — Music Publishing
      </p>
    </div>
  </section>
</template>

<style scoped>
.marquee-row {
  display: flex;
  width: max-content;
}

.marquee-content {
  display: flex;
  flex-shrink: 0;
}

@keyframes scroll-right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes scroll-left {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-scroll-right {
  animation: scroll-right 60s linear infinite;
}

.animate-scroll-left {
  animation: scroll-left 60s linear infinite;
}

.animate-scroll-right-slow {
  animation: scroll-right 80s linear infinite;
}
</style>
