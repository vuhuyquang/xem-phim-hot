<template>
  <div class="flex justify-center">
    <ul class="flex space-x-8 cursor-pointer py-8 text-xl">
      <li
        :class="selectedTab === 'overview' ? 'text-white border-b-2 border-white pb-2 transition-transform transform duration-300 delay-150' : 'text-[#414141] pb-2 transition-transform transform duration-300 delay-150'"
        class="px-2 font-normal"
        @click="selectTab('overview')"
      >
        TỔNG QUAN
      </li>
      <li
        :class="selectedTab === 'videos' ? 'text-white border-b-2 border-white pb-2 transition-transform transform duration-300 delay-150' : 'text-[#414141] pb-2 transition-transform transform duration-300 delay-150'"
        class="px-2 font-normal"
        @click="selectTab('videos')"
      >
        VIDEOS
      </li>
      <li
        :class="selectedTab === 'images' ? 'text-white border-b-2 border-white pb-2 transition-transform transform duration-300 delay-150' : 'text-[#414141] pb-2 transition-transform transform duration-300 delay-150'"
        class="px-2 font-normal"
        @click="selectTab('images')"
      >
        HÌNH ẢNH
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Theo dõi tab được chọn
const selectedTab = ref('overview');

// Hàm để chọn tab
function selectTab(tab: string) {
  selectedTab.value = tab;
}
</script>
