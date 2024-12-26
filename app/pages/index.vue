<script setup lang="ts">
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css/pagination'

const news = [
  {
    id: 1,
    title: '秋季旅遊，豪華享受方案',
    content: '秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。',
    image: {
      desktop: '/images/desktop/news1.png',
      mobile: '/images/mobile/news1.png',
      alt: '可看見海景及泳池的套房',
    },
  },
  {
    id: 2,
    title: '輕鬆住房專案',
    content: '我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。',
    image: {
      desktop: '/images/desktop/news2.png',
      mobile: '/images/mobile/news2.png',
      alt: '在雙人床上的兩顆灰色枕頭',
    },
  },
  {
    id: 3,
    title: '耶誕快樂，住房送禮',
    content: '聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！',
    image: {
      desktop: '/images/desktop/news3.png',
      mobile: '/images/mobile/news3.png',
      alt: '坐在沙發上的聖誕麋鹿玩偶',
    },
  },
]

const foods = [
  {
    id: 1,
    title: '海霸',
    time: '11:00 - 20:30',
    content: '以新鮮海產料理聞名，我們的專業廚師選用高雄當地的海鮮，每一道菜都充滿海洋的鮮美與清甜。無論是烤魚、蒸蝦還是煮蛤蜊，都能讓您品嚐到最新鮮的海洋風味。',
    image: {
      desktop: '/images/desktop/food1.png',
      mobile: '/images/mobile/food1.png',
    },
  },
  {
    id: 2,
    title: '日食',
    time: '17:00 - 22:00',
    content: '為您提供優質的牛排，每一塊肉都來自頂級的牛肉，經過專業廚師的巧手烹調，口感豐滿、風味絕佳。搭配我們的特製醬料，讓您的味蕾享受一場美味的盛宴。',
    image: {
      desktop: '/images/desktop/food2.png',
      mobile: '/images/mobile/food2.png',
    },
  },
  {
    id: 3,
    title: '山臻',
    time: '11:30 - 20:30',
    content: '帶您進入一次辣味與鮮香兼具的川菜美食之旅。我們的廚師掌握正宗的川菜烹調技巧，從麻辣鍋到口水雞，每一道菜都有其獨特的風味，讓您回味無窮。',
    image: {
      desktop: '/images/desktop/food3.png',
      mobile: '/images/mobile/food3.png',
    },
  },
  {
    id: 4,
    title: '月永',
    time: '11:00 - 20:00',
    content: '從鮮美的海鮮、經典的牛排，到各國的特色美食，我們都一應俱全。在這裡，您可以品嚐到世界各地的美食，每一道菜都由專業廚師用心製作，讓您在享受美食的同時，也能感受到我們的熱情與用心。',
    image: {
      desktop: '/images/desktop/food4.png',
      mobile: '/images/mobile/food4.png',
    },
  },
  {
    id: 5,
    title: '天潮',
    time: '14:00 - 19:30',
    content: '我們提供各種精緻甜點與糕點，無論您喜歡的是巧克力蛋糕、法式馬卡龍，還是台灣傳統的糕點，都能在這裡找到。讓我們的甜點帶您進入一場繽紛的甜蜜旅程。',
    image: {
      desktop: '/images/desktop/food5.png',
      mobile: '/images/mobile/food5.png',
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
        <swiper-container
          :slides-per-view="1"
          :pagination="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }"
        >
          <swiper-slide
            v-for="num in 5"
            :key="num"
          >
            <div relative h-full w-full>
              <picture>
                <source
                  srcset="/images/desktop/banner.png"
                  media="(min-width:576px)"
                >
                <img
                  src="/images/mobile/banner.png"
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
              p="10 lt-md:5" h="[clamp(4rem,12vh,7.25rem)] lt-md:16"
              w-full gap-x-3 rounded-2 border-none text-end font-600
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
    <section py="30 lt-md:20" relative z-1 bg-secondary color-base>
      <!-- 上方裝飾點 -->
      <picture position="absolute top-25 right-45 lt-md:right-6 lt-md:top-10" h="50 lt-md:25" w="50 lt-md:25">
        <source
          srcset="/images/desktop/dot.png"
          media="(min-width: 576px)"
        >
        <img
          src="/images/mobile/dot.png"
        >
      </picture>

      <div relative mxa max-w-screen-xl container p="lt-md:3 x-2">
        <div flex="~ row lt-md:col" gap-x-20>
          <div w="fit lt-md:2/12">
            <div mb="0 lt-md:10">
              <h2 text="5xl lt-md:8 primary nowrap" mb-6 font-bold>
                最新<br>消息
              </h2>
              <div h-0.5 w-full from-hex-be9c7c to-hex-ffffff bg-gradient-to-r />
            </div>
          </div>

          <div w="lt-md:full 10/12" flex="~ col" gap-10>
            <div
              v-for="item in news"
              :key="item.id"
              border-none bg-transparent
            >
              <div flex="~ lt-md:col row" items-center gap-6>
                <picture w="lt-md:full 5/12" relative of-hidden rounded-3>
                  <source
                    :srcset="item.image.desktop"
                    media="(min-width: 576px)"
                  >
                  <img
                    :src="item.image.mobile"
                    :alt="item.image.alt"
                    h-full w-full object-cover transition-all duration-500
                    hover="scale-110 brightness-75"
                  >
                </picture>

                <div p-0 w="lt-md:full 7/12">
                  <h3 mb="6 lt-md:2" text="8 lt-md:7 black" font-bold>
                    {{ item.title }}
                  </h3>
                  <p text="base lt-md:sm" font-medium>
                    {{ item.content }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 下方裝飾點 -->
      <picture position="absolute bottom--20 left-50 lt-md:bottom--15 lt-md:left-6" h="50 lt-md:25" w="50 lt-md:25">
        <source
          srcset="/images/desktop/dot.png"
          media="(min-width: 576px)"
        >
        <img
          src="/images/mobile/dot.png"
        >
      </picture>
    </section>

    <!-- About -->
    <section
      p="t-30 b-50 lt-md:t-20 lt-md:b-30"
      relative
      bg-neutral
      h="992px lt-md:794px"
    >
      <picture absolute inset-0>
        <source
          srcset="/images/desktop/about.png"
          media="(min-width: 576px)"
        >
        <img
          src="/images/mobile/about.png"
          alt="關於我們背景"
          h-full w-full object-contain
        >
      </picture>

      <div p-0 flex="~ justify-center">
        <div
          p="20 lt-md:6"
          m="t-20 lt-md:t-10 e-5 s-10"
          bg="[linear-gradient(180deg,rgba(20,15,10,0.8)_0%,rgba(190,156,124,0.8)_100%)]"
          max-w-261 w-full backdrop-blur-10
          border="l-1 b-1 white"
          rounded="[80px_80px_0_80px] lt-md:[40px_40px_0_40px]"
          transform="translate-x-7vw lt-md:none"
          lt-md="h-594px"
        >
          <div flex items-center mb="20 lt-md:10" gap-10>
            <h2 mb-0 text="5xl lt-md:8 nowrap" font-bold>
              關於<br>我們
            </h2>
            <div w="165px lt-md:161px" h-0.5 bg-white />
          </div>
          <div flex="~ col" text="base lt-md:sm" gap="10 lt-md:4" font-medium>
            <p>
              享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。
              <br>
              我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
            </p>
            <p>
              我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。
              <br>
              我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
            </p>
            <p>
              在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。
            </p>
            <p>
              享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Rooms -->
    <section py="30 lt-md:20" px="0 lt-md:3" relative bg-neutral>
      <picture
        absolute z-3 bg-no-repeat
        w="1060px lt-md:375px"
        h="187px lt-md:84px"
        top="45 lt-xl:32.5 lt-lg:0 lt-md:-12.5 lt-sm:-6"
        left="215 lt-xl:157.5 lt-lg:107.5 lt-sm:20"
      >
        <source
          srcset="/images/desktop/line.png"
          media="(min-width: 576px)"
        >
        <img
          src="/images/mobile/line.png"
          h-full w-full object-contain
        >
      </picture>

      <picture
        absolute z-1 bg-no-repeat
        w="full lt-md:93.75"
        h="169.25 lt-xl:62.5% lt-lg:80% lt-md:86% lt-sm:33"
        bottom="0 lt-md:72"
        right="a lt-md:0"
        left="lt-xl:0 lt-xl:-25 lt-md:-71.25 lt-sm:0"
      >
        <source
          srcset="/images/desktop/wave.png"
          media="(min-width: 576px)"
        >
        <img
          src="/images/mobile/wave.png"
          h-full w-full object-contain
        >
      </picture>

      <div relative z-2 w-full flex="~ row lt-md:col lt-md:justify-center justify-start lt-md:items-start items-end" gap="20 lt-md:6">
        <!-- Swiper -->
        <!-- TODO: active bullet width 60px -->
        <div relative w="lt-md:full 225">
          <ClientOnly>
            <swiper-container
              :modules="[Autoplay, Pagination, Navigation]"
              :slides-per-view="1"
              :pagination="true"
              :navigation="{
                nextEl: '#swiper-more-next',
                prevEl: '#swiper-more-prev',
              }"
              :autoplay="{
                delay: 5000,
                disableOnInteraction: false,
              }"
              loop m-0
            >
              <swiper-slide
                v-for="(num, index) in 5"
                :key="index"
              >
                <div relative mxa h-full w-fit of-hidden rounded-2>
                  <picture>
                    <source
                      srcset="/images/desktop/room1.png"
                      media="(min-width:768px)"
                    >
                    <img
                      src="/images/mobile/room1.png"
                      alt="room-a"
                      h-auto w-full object-contain backdrop-blur-20
                    >
                  </picture>
                </div>
              </swiper-slide>
            </swiper-container>
          </ClientOnly>
        </div>

        <div max-w-628px flex="~ 1 col" gap-y="10 lt-md:6">
          <div>
            <h2 mb="4 lt-md:2" text="10 lt-md:2xl" font-bold lh-none>
              尊爵雙人房
            </h2>
            <p font-medium text="base lt-md:sm">
              享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
            </p>
          </div>
          <div text="8 lt-md:2xl" font-bold>
            NT$ 10,000
          </div>
          <NuxtLink
            to="/rooms"
            flex="~ justify-end items-center"
            p="10 lt-md:5" h="[clamp(4rem,12vh,7.25rem)] lt-md:16"
            w-full gap-x-3 rounded-2 border-none text-end font-600
            class="group btn"
          >
            <p text="2xl lt-md:base" font-bold>
              查看更多
            </p>
            <div
              transition="[color,width]"
              h-0.25 w-20 bg-black duration-250 ease-in-out lt-md-w-10vw
              class="group-hover:(w-8vw bg-white)"
            />
          </NuxtLink>
          <div flex justify-end>
            <button
              id="swiper-more-prev"
              border-none bg-transparent text-primary
              type="button"
              class="group"
            >
              <div

                i-mdi-arrow-left m-4 text-2xl transition-transform group-hover:scale-110
              />
            </button>
            <button
              id="swiper-more-next"
              border-none bg-transparent text-primary
              type="button"
              class="group"
            >
              <div

                i-mdi-arrow-right m-4 text-2xl transition-transform group-hover:scale-110
              />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Food -->
    <section py="30 lt-md:20" relative bg-secondary>
      <div max-w="5/6" w-full px="lt-md:3 2">
        <div flex="~" items-center mb="20 lt-md:10" gap-10>
          <h2 mb-0 text="5xl lt-md:8 nowrap primary" font-bold>
            佳餚<br>美饌
          </h2>
          <div h-0.5 w-full from-hex-be9c7c to-hex-ffffff bg-gradient-to-r />
        </div>
        <swiper-container
          slides-per-view="auto"
          :modules="[FreeMode]"
          :space-between="24"
        >
          <swiper-slide
            v-for="food in foods"
            :key="food.id"
            w-fit
          >
            <div relative of-hidden rounded-3 border-none>
              <picture>
                <source
                  :srcset="food.image.desktop"
                  media="(min-width: 576px)"
                >
                <img
                  :src="food.image.mobile"
                  :alt="food.title"
                  rounded-3
                  transition duration-500
                  hover="scale-110 brightness-75"
                >
              </picture>
              <div
                p="md:6 4"
                position="absolute bottom-0" w-full rounded-b-3
                bg="[linear-gradient(180deg,rgba(20,15,10,0)_0%,rgba(20,15,10,0.8)_55%,rgba(20,15,10,0.9)_100%)]"
                backdrop-blur-20
              >
                <div flex="~ items-center justify-between" mb-6 font-bold>
                  <h5 mb-0 text-2xl>
                    {{ food.title }}
                  </h5>
                  <div flex="~ justify-between items-center" gap-4 text="base hex-ececec">
                    <span>SUN-MON</span>
                    <span>{{ food.time }}</span>
                  </div>
                </div>
                <p text-base font-medium>
                  {{ food.content }}
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
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
