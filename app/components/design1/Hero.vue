<script setup lang="ts">
// Slides with images
const baseSlides = [
  { id: 1, title: 'Artist One', album: 'Debut Album', image: 'https://picsum.photos/seed/artist1/400/600' },
  { id: 2, title: 'Artist Two', album: 'Second Wave', image: 'https://picsum.photos/seed/artist2/400/600' },
  { id: 3, title: 'Artist Three', album: 'Trilogy', image: 'https://picsum.photos/seed/artist3/400/600' },
  { id: 4, title: 'Artist Four', album: 'Fourth Dimension', image: 'https://picsum.photos/seed/artist4/400/600' },
  { id: 5, title: 'Artist Five', album: 'Fifth Element', image: 'https://picsum.photos/seed/artist5/400/600' },
  { id: 6, title: 'Artist Six', album: 'Sixth Sense', image: 'https://picsum.photos/seed/artist6/400/600' },
  { id: 7, title: 'Artist Seven', album: 'Lucky Seven', image: 'https://picsum.photos/seed/artist7/400/600' },
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

  // Larger spacing to fill screen width
  const translateX = diff * 300
  const rotateY = diff * -15
  const scale = 1 - absDiff * 0.1
  const zIndex = 10 - absDiff

  return {
    transform: `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
    zIndex,
    opacity: 1 - absDiff * 0.25,
  }
}

const currentArtist = computed(() => baseSlides[currentSlide.value])
</script>

<template>
  <section class="relative h-[80vh] flex items-center justify-center overflow-hidden">
    <!-- Background Image with Opacity (no blur) -->
    <div class="absolute inset-0 transition-all duration-700">
      <img
        v-for="(slide, index) in baseSlides"
        :key="slide.id"
        :src="slide.image"
        :alt="slide.title"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        :class="currentSlide === index ? 'opacity-30' : 'opacity-0'"
      />
      <!-- Dark overlay only (no blur) -->
      <div class="absolute inset-0 bg-black/60"></div>
    </div>

    <!-- Main Content Container -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col items-center justify-center">
      <!-- Carousel Container -->
      <div class="relative w-full flex items-center justify-center" style="perspective: 1500px; height: 55vh;">
        <!-- Slides -->
        <div
          v-for="(slide, index) in baseSlides"
          :key="slide.id"
          class="absolute w-56 md:w-72 lg:w-80 h-[18rem] md:h-[24rem] lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ease-out cursor-pointer"
          :style="getSlideStyle(index)"
          @click="currentSlide = index"
        >
          <img
            :src="slide.image"
            :alt="slide.title"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Title Section - CENTERED below carousel with black bg opacity -->
      <div class="relative z-30 text-center -mt-8">
        <div class="inline-block bg-black/60 backdrop-blur-sm px-6 py-4 rounded-lg">
          <h1 class="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-orange-400 tracking-wider transition-all duration-500 uppercase leading-tight">
            {{ currentArtist.title }}
          </h1>
          <p class="text-white/90 text-base md:text-lg mt-1">{{ currentArtist.album }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
