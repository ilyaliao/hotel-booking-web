<script setup lang="ts">
const containerRef = useTemplateRef('containerRef')
// @ts-expect-error nuxt-swiper not export `SwiperContainer`
useSwiper(containerRef, {
  slidesPerView: 1,
  pagination: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
})
</script>

<template>
  <section relative>
    <!-- Swiper -->
    <!-- TODO: active bullet width 60px -->
    <ClientOnly>
      <swiper-container ref="containerRef" :init="false">
        <swiper-slide
          v-for="num in 5"
          :key="num"
        >
          <div relative h-full w-full>
            <picture>
              <source
                srcset="/images/home-hero.png"
                media="(min-width:576px)"
              >
              <img
                src="/images/home-hero-sm.png"
                alt="hero banner"
              >
            </picture>
          </div>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>

    <div position="absolute inset-0" flex="~ justify-between items-center" lt-md="gap-none px-none flex-col flex-justify-center" z-2 w-full gap-10 px-20>
      <div block text-start lt-md="flex flex-col items-center text-center">
        <div flex="~ col" m="t-0 b-10 lt-md:b-5 lt-md:t-10" text-primary gap-y-2 font-700>
          <h2 text="10 lt-md:7" lh-tight>
            享樂酒店
          </h2>
          <h5 mb-0 text="2xl lt-md:base">
            Enjoyment Luxury Hotel
          </h5>
        </div>
        <div h-0.5 w-33vw from-hex-be9c7c to-hex-ffffff bg-gradient-to-r lt-md="w-0.5 h-20.75 z-1 mb-10 bg-gradient-to-b" />
      </div>
      <div
        flex="~ justify-center items-center"
        p="5.5%"
        border="t-1 r-1 b-0 l-0 #f5f7f9"
        relative
        rounded-20
        from-hex-ffffff00
        to-hex-ffffff4d
        bg-gradient-to-b
        backdrop-blur-6
        lt-md="h-105 translate-x-10%"
        class="max-h-[min(62vh,672px)] max-w-[clamp(291px,48vw,924px)]"
      >
        <div max-w-39vw translate-x="-18%" lt-md="max-w-none translate-x--11%">
          <h1 mb-6 text="nowrap white" font-700 class="text-size-[clamp(3rem,5.2vw,6.25rem)]">
            高雄<br>豪華住宿之選
          </h1>
          <p
            text="8 hex-e0e0e0" font="600 lt-md:700"
            whitespace="nowrap lt-md:normal"
            class="mb-[min(5vh,3.75rem)] text-size-[clamp(1rem,1.7vw,2rem)]"
          >
            我們致力於為您提供無與倫比的奢華體驗與優質服務
          </p>

          <NuxtLink
            to="/rooms"
            flex="~ justify-end items-center"
            w-full gap-x-3 rounded-2 border-none p="10 lt-md:5" text-end font-600 h="[clamp(4rem,12vh,7.25rem)] lt-md:16"
            class="group btn"
          >
            <p text="2xl lt-md:base" font-700>
              立即訂房
            </p>
            <div
              transition="[color,width]"
              h-0.25 w-20 bg-black duration-250 ease-in-out lt-md-w-10vw
              class="group-hover:(w-8vw bg-white)"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
  --swiper-pagination-bullet-width: 32px;
  --swiper-pagination-bullet-height: 4px;
  --swiper-pagination-bullet-inactive-color: #f1eae4;
  --swiper-pagination-bullet-border-radius: 100px;
  --swiper-pagination-bullet-inactive-opacity: 1;
  --swiper-pagination-color: #bf9d7d;
}

img {
  --uno: w-full h-full object-cover filter-brightness-40;
}
</style>
