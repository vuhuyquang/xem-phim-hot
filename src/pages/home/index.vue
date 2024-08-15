<template>
  <div>
    <Banner />
    <div class="p-6 flex flex-col gap-2">
      <h2 class="text-white text-2xl">Phim Phổ Biến</h2>
      <div class="flex flex-row gap-3 cursor-pointer overflow-x-auto">
        <div class="h-[384px] w-[240px] min-w-[240px] bg-slate-300">
          <img class="h-full" src="https://movies-proxy.vercel.app/ipx/f_webp&s_400x600/tmdb/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg" alt="Ảnh phim">
        </div>
        <div class="h-[384px] w-[240px] min-w-[240px] bg-slate-300">
          <img class="h-full" src="https://movies-proxy.vercel.app/ipx/f_webp&s_400x600/tmdb/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg" alt="Ảnh phim">
        </div>
        <div class="h-[384px] w-[240px] min-w-[240px] bg-slate-300">
          <img class="h-full" src="https://movies-proxy.vercel.app/ipx/f_webp&s_400x600/tmdb/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg" alt="Ảnh phim">
        </div>
        <div class="h-[384px] w-[240px] min-w-[240px] bg-slate-300">
          <img class="h-full" src="https://movies-proxy.vercel.app/ipx/f_webp&s_400x600/tmdb/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg" alt="Ảnh phim">
        </div>
        <div class="h-[384px] w-[240px] min-w-[240px] bg-slate-300">
          <img class="h-full" src="https://movies-proxy.vercel.app/ipx/f_webp&s_400x600/tmdb/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg" alt="Ảnh phim">
        </div>
        <div class="h-[384px] w-[240px] min-w-[240px] bg-slate-300">
          <img class="h-full" src="https://movies-proxy.vercel.app/ipx/f_webp&s_400x600/tmdb/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg" alt="Ảnh phim">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Banner from "@/components/common/Banner/index.vue"
</script>