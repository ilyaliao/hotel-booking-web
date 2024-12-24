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

const news = [
  {
    id: 1,
    title: '秋季旅遊，豪華享受方案',
    content: '秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。',
    image: {
      desktop: '/images/home-news-1.png',
      mobile: '/images/home-news-sm-1.png',
      alt: '可看見海景及泳池的套房',
    },
  },
  {
    id: 2,
    title: '輕鬆住房專案',
    content: '我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。',
    image: {
      desktop: '/images/home-news-2.png',
      mobile: '/images/home-news-sm-2.png',
      alt: '在雙人床上的兩顆灰色枕頭',
    },
  },
  {
    id: 3,
    title: '耶誕快樂，住房送禮',
    content: '聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！',
    image: {
      desktop: '/images/home-news-3.png',
      mobile: '/images/home-news-sm-3.png',
      alt: '坐在沙發上的聖誕麋鹿玩偶',
    },
  },
]
</script>

<template>
  <main of-hidden font-sans>
    <!-- Banner -->
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
                  h-full w-full object-cover brightness-40
                >
              </picture>
            </div>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>

      <div position="absolute inset-0" flex="~ justify-between items-center" lt-md="gap-none px-none flex-col flex-justify-center" z-2 w-full gap-10 px-20>
        <div block text-start lt-md="flex flex-col items-center text-center">
          <div flex="~ col" m="t-0 b-10 lt-md:b-5 lt-md:t-10" gap-y-2 text-primary font-bold>
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
          max-h="[min(62vh,672px)]" max-w="[clamp(291px,48vw,924px)]"
        >
          <div max-w-39vw translate-x="-18%" lt-md="max-w-none translate-x--11%">
            <h1 mb-6 text="nowrap white size-[clamp(3rem,5.2vw,6.25rem)]" font-bold>
              高雄<br>豪華住宿之選
            </h1>
            <p
              text="8 hex-e0e0e0 size-[clamp(1rem,1.7vw,2rem)]" font="600 lt-md:700"
              mb="[min(5vh,3.75rem)]"
              whitespace="nowrap lt-md:normal"
            >
              我們致力於為您提供無與倫比的奢華體驗與優質服務
            </p>

            <NuxtLink
              to="/rooms"
              flex="~ justify-end items-center"
              w-full gap-x-3 rounded-2 border-none p="10 lt-md:5" text-end font-600 h="[clamp(4rem,12vh,7.25rem)] lt-md:16"
              class="group btn"
            >
              <p text="2xl lt-md:base" font-bold>
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

    <!-- News -->
    <section bg-secondary py="md:30 20" color-base>
      <div relative mxa max-w-screen-xl px-3 container md:px-2>
        <div flex="~ md:row col" gap-x-20>
          <div w="fit md:2/12">
            <div mb="md:0 10">
              <h2 text="md:5xl 8 primary" mb-6 font-bold>
                最新<br>消息
              </h2>
              <div h-0.5 w-full from-hex-be9c7c to-hex-ffffff bg-gradient-to-r />
            </div>
          </div>

          <div w="full md:10/12" flex="~ col" gap-10>
            <div
              v-for="item in news"
              :key="item.id"
              class="card group"
              border-none bg-transparent
            >
              <div flex="~ col md:row" items-center gap-6>
                <picture w="full md:5/12" relative overflow-hidden rounded-3>
                  <source
                    :srcset="item.image.desktop"
                    media="(min-width: 576px)"
                  >
                  <img
                    :src="item.image.mobile"
                    :alt="item.image.alt"
                    h-full w-full object-cover transition-all duration-500
                    class="group-hover:(scale-110 brightness-75)"
                  >
                </picture>

                <div p-0 w="full md:7/12">
                  <h3 mb="md:6 2" text="md:8 7 black" font-bold>
                    {{ item.title }}
                  </h3>
                  <p text="md:base sm" font-medium>
                    {{ item.content }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
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
</style>
