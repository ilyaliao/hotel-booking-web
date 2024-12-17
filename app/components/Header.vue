<script setup lang="ts">
import { transparentPageRegexp } from '~/constants'

const route = useRoute()

const { y } = useWindowScroll()

const isTransparentRoute = computed(() => transparentPageRegexp.test(route.path))

const show = ref(false)
function toggleMenu() {
  show.value = !show.value
}
</script>

<template>
  <header
    :class="{
      'bg-hex-000000': y > 50,
      'bg-transparent': isTransparentRoute,
      'bg-hex-140F0A': !isTransparentRoute,
    }"
    position="fixed top-0" z-3 w-full
    transition-colors duration-300
  >
    <nav p="x-20 y-6" lt-md="px-3 py-4">
      <div w-full flex="~ justify-between">
        <NuxtLink
          to="/"
        >
          <img
            src="/logo-white.svg"
            alt="logo"
            ha max-w-27vw
          >
        </NuxtLink>
        <button
          z-20 hidden border-0 p-2 text-2xl shadow-none lt-md-block
          type="button"
          @click="toggleMenu"
        >
          <div v-if="show" i-mdi:close />
          <div v-else i-mdi:menu />
        </button>
        <div :class="show ? 'lt-md-translate-y-0' : 'lt-md-translate-y-full'" block of-hidden transition-transform duration-300 lt-md="fixed inset-0 bg-hex-140f0a min-h-dvh px-5">
          <ul msa h-full w-full gap="x-4 lt-md:x-0 y-0 lt-md:y-4" text="center white" font-700 flex="~ items-center justify-center lt-md:col">
            <li w="auto lt-md:full" p-4>
              <NuxtLink
                :to="{
                  name: 'rooms',
                }"
              >
                客房旅宿
              </NuxtLink>
            </li>
            <li w="auto lt-md:full" p-4>
              <NuxtLink
                to="/"
              >
                會員登入
              </NuxtLink>
            </li>
            <li ha w="auto lt-md:full" @click="toggleMenu">
              <NuxtLink
                :to="{
                  name: 'rooms',
                }"
                p="x-8 y-4"
                h-full rounded-3 border-none font-700 flex="~ items-center justify-center"
                class="btn"
              >
                立即訂房
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
