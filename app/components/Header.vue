<script setup lang="ts">
import { transparentPageRegexp } from '~/constants'

const route = useRoute()

const { y } = useWindowScroll()

const isTransparentRoute = computed(() => transparentPageRegexp.test(route.path))
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
          hidden border-0 p-2 shadow-none lt-md-block
          type="button"
        >
          <div i-mdi:menu text-2xl />
        </button>
        <div block of-hidden transition-opacity duration-50 lt-md-hidden>
          <ul msa h-full w-full gap-x-4 text="center white" font-700 flex="~ items-center justify-center">
            <li p-4>
              <NuxtLink
                :to="{
                  name: 'rooms',
                }"
              >
                客房旅宿
              </NuxtLink>
            </li>
            <li p-4>
              <NuxtLink
                to="/"
              >
                會員登入
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="{
                  name: 'rooms',
                }"
                p="x-8 y-4" rounded-3 border-none font-700
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
