<script setup lang="ts">
// Images for the diagonal grid
const gridImages = [
  { id: 1, image: 'https://picsum.photos/seed/music1/500/350' },
  { id: 2, image: 'https://picsum.photos/seed/music2/500/350' },
  { id: 3, image: 'https://picsum.photos/seed/artist1/500/350' },
  { id: 4, image: 'https://picsum.photos/seed/music3/500/350' },
  { id: 5, image: 'https://picsum.photos/seed/sound1/500/350' },
  { id: 6, image: 'https://picsum.photos/seed/music4/500/350' },
  { id: 7, image: 'https://picsum.photos/seed/beats1/500/350' },
  { id: 8, image: 'https://picsum.photos/seed/music5/500/350' },
]

// Create rows with enough duplicates for seamless infinite scroll
const row1 = [...gridImages, ...gridImages, ...gridImages, ...gridImages]
const row2 = [...gridImages.slice(3), ...gridImages.slice(0, 3), ...gridImages.slice(3), ...gridImages.slice(0, 3), ...gridImages.slice(3), ...gridImages.slice(0, 3), ...gridImages]
const row3 = [...gridImages.slice(5), ...gridImages.slice(0, 5), ...gridImages.slice(5), ...gridImages.slice(0, 5), ...gridImages.slice(5), ...gridImages.slice(0, 5), ...gridImages]
</script>

<template>
  <section class="min-h-screen bg-red-600 relative overflow-hidden">
    <!-- Diagonal Grid Background -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Rotated container for diagonal effect -->
      <div class="diagonal-grid absolute -inset-[50%] w-[200%] h-[200%] flex flex-col justify-center -rotate-12 origin-center">
        <!-- Row 1 -->
        <div class="marquee-row flex gap-4 mb-4">
          <div class="marquee-content flex gap-4 animate-scroll-right">
            <div
              v-for="(img, index) in row1"
              :key="`r1-${index}`"
              class="flex-shrink-0 w-64 h-44 md:w-80 md:h-56 lg:w-96 lg:h-64 rounded-xl overflow-hidden shadow-lg"
            >
              <img :src="img.image" :alt="`Image ${index}`" class="w-full h-full object-cover" />
            </div>
          </div>
          <div class="marquee-content flex gap-4 animate-scroll-right" aria-hidden="true">
            <div
              v-for="(img, index) in row1"
              :key="`r1-dup-${index}`"
              class="flex-shrink-0 w-64 h-44 md:w-80 md:h-56 lg:w-96 lg:h-64 rounded-xl overflow-hidden shadow-lg"
            >
              <img :src="img.image" :alt="`Image ${index}`" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <!-- Row 2 -->
        <div class="marquee-row flex gap-4 mb-4">
          <div class="marquee-content flex gap-4 animate-scroll-left">
            <div
              v-for="(img, index) in row2"
              :key="`r2-${index}`"
              class="flex-shrink-0 w-64 h-44 md:w-80 md:h-56 lg:w-96 lg:h-64 rounded-xl overflow-hidden shadow-lg"
            >
              <img :src="img.image" :alt="`Image ${index}`" class="w-full h-full object-cover" />
            </div>
          </div>
          <div class="marquee-content flex gap-4 animate-scroll-left" aria-hidden="true">
            <div
              v-for="(img, index) in row2"
              :key="`r2-dup-${index}`"
              class="flex-shrink-0 w-64 h-44 md:w-80 md:h-56 lg:w-96 lg:h-64 rounded-xl overflow-hidden shadow-lg"
            >
              <img :src="img.image" :alt="`Image ${index}`" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <!-- Row 3 -->
        <div class="marquee-row flex gap-4">
          <div class="marquee-content flex gap-4 animate-scroll-right-slow">
            <div
              v-for="(img, index) in row3"
              :key="`r3-${index}`"
              class="flex-shrink-0 w-64 h-44 md:w-80 md:h-56 lg:w-96 lg:h-64 rounded-xl overflow-hidden shadow-lg"
            >
              <img :src="img.image" :alt="`Image ${index}`" class="w-full h-full object-cover" />
            </div>
          </div>
          <div class="marquee-content flex gap-4 animate-scroll-right-slow" aria-hidden="true">
            <div
              v-for="(img, index) in row3"
              :key="`r3-dup-${index}`"
              class="flex-shrink-0 w-64 h-44 md:w-80 md:h-56 lg:w-96 lg:h-64 rounded-xl overflow-hidden shadow-lg"
            >
              <img :src="img.image" :alt="`Image ${index}`" class="w-full h-full object-cover" />
            </div>
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
            class="bg-black text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors rounded-md"
          >
            View Roster
          </NuxtLink>
          <NuxtLink
            to="#about"
            class="border-2 border-black text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors rounded-md"
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
