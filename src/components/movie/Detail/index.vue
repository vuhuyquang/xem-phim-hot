<template>
  <div class="flex flex-col">
    <div class="flex justify-center">
      <ul class="flex space-x-8 cursor-pointer mt-8 mb-4 text-xl">
        <li
          :class="selectedTab === 'overview' ? 'text-white border-b-2 border-white pb-2 transition-transform transform duration-300 delay-[45ms]' : 'text-[#414141] pb-2 transition-transform transform duration-300 delay-[45ms]'"
          class="px-2 font-normal" @click="selectTab('overview')">
          TỔNG QUAN
        </li>
        <li
          :class="selectedTab === 'videos' ? 'text-white border-b-2 border-white pb-2 transition-transform transform duration-300 delay-[45ms]' : 'text-[#414141] pb-2 transition-transform transform duration-300 delay-[45ms]'"
          class="px-2 font-normal" @click="selectTab('videos')">
          VIDEOS
        </li>
        <li
          :class="selectedTab === 'images' ? 'text-white border-b-2 border-white pb-2 transition-transform transform duration-300 delay-[45ms]' : 'text-[#414141] pb-2 transition-transform transform duration-300 delay-[45ms]'"
          class="px-2 font-normal" @click="selectTab('images')">
          HÌNH ẢNH
        </li>
      </ul>
    </div>
    <div class="container mx-auto max-w-[1200px] bg-gray-500 p-2">
      <div class="flex flex-row w-full gap-1">
        <div class="w-[25%]">
          <img class="w-[316px] h-[506px]" src="https://movies-proxy.vercel.app/ipx/f_webp&s_400x600/tmdb/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg" alt="Ảnh phim">
        </div>
        <div class="w-[75%]">2</div>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue';

const selectedTab = ref<string>('overview');

function selectTab(tab: string) {
  selectedTab.value = tab;
}
</script>
