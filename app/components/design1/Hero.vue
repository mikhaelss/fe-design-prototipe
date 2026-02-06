<script setup lang="ts">
// Slides with images - some are single, some are stacked (2 images)
const baseSlides = [
  {
    id: 1,
    title: 'Artist One',
    album: 'Debut Album',
    type: 'single',
    image: 'https://picsum.photos/seed/artist1/400/600'
  },
  {
    id: 2,
    title: 'Artist Two',
    album: 'Second Wave',
    type: 'stacked',
    images: [
      'https://picsum.photos/seed/artist2a/400/290',
      'https://picsum.photos/seed/artist2b/400/290'
    ]
  },
  {
    id: 3,
    title: 'Artist Three',
    album: 'Trilogy',
    type: 'single',
    image: 'https://picsum.photos/seed/artist3/400/600'
  },
  {
    id: 4,
    title: 'Artist Four',
    album: 'Fourth Dimension',
    type: 'stacked',
    images: [
      'https://picsum.photos/seed/artist4a/400/290',
      'https://picsum.photos/seed/artist4b/400/290'
    ]
  },
  {
    id: 5,
    title: 'Artist Five',
    album: 'Fifth Element',
    type: 'single',
    image: 'https://picsum.photos/seed/artist5/400/600'
  },
  {
    id: 6,
    title: 'Artist Six',
    album: 'Sixth Sense',
    type: 'stacked',
    images: [
      'https://picsum.photos/seed/artist6a/400/290',
      'https://picsum.photos/seed/artist6b/400/290'
    ]
  },
  {
    id: 7,
    title: 'Artist Seven',
    album: 'Lucky Seven',
    type: 'single',
    image: 'https://picsum.photos/seed/artist7/400/600'
  },
]

const currentSlide = ref(3)

// Auto slide
let autoSlideInterval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  autoSlideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % baseSlides.length
  }, 4000)
})

onUnmounted(() => {
  if (autoSlideInterval) clearInterval(autoSlideInterval)
})

const getSlideStyle = (index: number) => {
  let diff = index - currentSlide.value

  // Handle wrapping for infinite effect
  if (diff > baseSlides.length / 2) diff -= baseSlides.length
  if (diff < -baseSlides.length / 2) diff += baseSlides.length

  const absDiff = Math.abs(diff)

  if (absDiff > 2) return { opacity: 0, transform: 'scale(0.6) translateX(0)', zIndex: 0, pointerEvents: 'none' as const }

  // Consistent spacing for all screen sizes
  const translateX = diff * 300
  const rotateY = diff * -15
  const scale = 1 - absDiff * 0.12
  const zIndex = 10 - absDiff

  return {
    transform: `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
    zIndex,
    opacity: 1 - absDiff * 0.3,
  }
}

const currentArtist = computed(() => baseSlides[currentSlide.value])
</script>

<template>
  <section class="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black">
    <!-- Background Image with Opacity (no blur) -->
    <div class="absolute inset-0 transition-all duration-700">
      <template v-for="(slide, index) in baseSlides" :key="slide.id">
        <img
          v-if="slide.type === 'single'"
          :src="slide.image"
          :alt="slide.title"
          class="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          :class="currentSlide === index ? 'opacity-20' : 'opacity-0'"
        />
        <img
          v-else
          :src="slide.images?.[0]"
          :alt="slide.title"
          class="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          :class="currentSlide === index ? 'opacity-20' : 'opacity-0'"
        />
      </template>
    </div>

    <!-- Strong gradient overlay from left to right for caption visibility -->
    <div class="absolute inset-0 bg-gradient-to-r from-black via-black/70 via-40% to-transparent z-[5]"></div>

    <!-- Caption - LEFT side, vertically centered, dynamic -->
    <div class="absolute left-6 md:left-12 lg:left-20 top-1/2 -translate-y-1/2 z-20 text-left max-w-md">
      <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-orange-400 tracking-wider transition-all duration-500 uppercase leading-tight caption-shadow">
        {{ currentArtist?.title }}
      </h1>
      <p class="text-white text-lg md:text-xl mt-2 caption-shadow-light">{{ currentArtist?.album }}</p>
    </div>

    <!-- Carousel Container - centered, bigger cards -->
    <div class="relative z-10 w-full h-[80%] flex items-center justify-center" style="perspective: 1500px;">
      <!-- Slides -->
      <div
        v-for="(slide, index) in baseSlides"
        :key="slide.id"
        class="absolute w-72 md:w-80 lg:w-96 h-[90%] max-h-[32rem] overflow-hidden shadow-2xl transition-all duration-500 ease-out cursor-pointer"
        :style="getSlideStyle(index)"
        @click="currentSlide = index"
      >
        <!-- Single image -->
        <template v-if="slide.type === 'single'">
          <img
            :src="slide.image"
            :alt="slide.title"
            class="w-full h-full object-cover"
          />
        </template>

        <!-- Stacked images (2 images vertically) -->
        <template v-else>
          <div class="flex flex-col h-full gap-1">
            <div class="flex-1 overflow-hidden">
              <img
                :src="slide.images?.[0]"
                :alt="`${slide.title} - 1`"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex-1 overflow-hidden">
              <img
                :src="slide.images?.[1]"
                :alt="`${slide.title} - 2`"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.caption-shadow {
  text-shadow:
    0 0 10px rgba(0, 0, 0, 0.8),
    0 0 20px rgba(0, 0, 0, 0.6),
    0 0 30px rgba(0, 0, 0, 0.4),
    2px 2px 4px rgba(0, 0, 0, 0.9);
}

.caption-shadow-light {
  text-shadow:
    0 0 8px rgba(0, 0, 0, 0.7),
    0 0 15px rgba(0, 0, 0, 0.5),
    1px 1px 3px rgba(0, 0, 0, 0.8);
}
</style>
