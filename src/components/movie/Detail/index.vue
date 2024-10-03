<template>
  <div class="flex flex-col">
    <!-- Tab Navigation -->
    <div class="flex justify-center">
      <ul class="flex space-x-4 md:space-x-8 cursor-pointer mt-4 md:mt-8 mb-4 md:mb-10 text-sm md:text-xl">
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

    <!-- Content Section -->
    <div class="container mx-auto max-w-[1200px] px-4 md:px-0 pb-10">
      <div class="flex flex-col lg:flex-row w-full">
        <!-- Image Section (Ẩn trên di động và tablet) -->
        <div class="w-full lg:w-[28%] p-1 bg-[#1f2021] mb-6 lg:mb-0 h-auto lg:h-[506px]">
          <img v-if="props.infoFilm?.movie?.thumb_url" class="hidden lg:block w-full object-cover h-full"
            :src="props.infoFilm?.movie?.thumb_url" :alt="props.infoFilm?.movie?.name">
        </div>

        <!-- Text and Tables Section -->
        <div class="w-full lg:w-[72%] p-4 lg:px-10 lg:py-8 text-white">
          <!-- Story Section -->
          <div>
            <h2 class="text-[20px] lg:text-[30px] leading-7 lg:leading-9">Cốt truyện</h2>
            <i class="opacity-80 leading-[1.5rem] lg:leading-[1.65rem]">
              {{ props.infoFilm?.movie?.content }}
            </i>
          </div>

          <!-- Information Tables -->
          <div
            class="flex flex-col lg:flex-row opacity-80 leading-[1.5rem] lg:leading-[1.65rem] text-[12px] lg:text-[14px] mt-4 lg:mt-8">
            <!-- Left Table -->
            <div class="w-full lg:w-1/2 mb-4 lg:mb-0">
              <table class="w-full border-separate">
                <tr>
                  <td class="whitespace-nowrap w-1/3">Phát hành</td>
                  <td v-if="props.infoFilm?.movie?.showtimes === ''"><i>N/A</i></td>
                  <td v-else>{{ props.infoFilm?.movie?.showtimes }}</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap">Đạo diễn</td>
                  <td v-if="props.infoFilm?.movie?.director.length === 0"><i>N/A</i></td>
                  <td v-else>{{ props.infoFilm?.movie?.director.join(', ') }}</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap">Doanh thu</td>
                  <td><i>N/A</i></td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap">Trạng thái</td>
                  <td>{{ props.infoFilm?.movie?.status }}</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap">Sản xuất</td>
                  <td><i>N/A</i></td>
                </tr>
              </table>
            </div>

            <!-- Right Table -->
            <div class="w-full lg:w-1/2">
              <table class="w-full border-separate">
                <tr>
                  <td class="whitespace-nowrap w-1/3">Thời gian</td>
                  <td>{{ props.infoFilm?.movie?.time }}</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap">Ngân sách</td>
                  <td><i>N/A</i></td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap">Thể loại</td>
                  <td>{{ props.infoFilm?.movie?.country.map(c => c.name).join(', ') }}</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap">Ngôn ngữ</td>
                  <td>{{ props.infoFilm?.movie?.lang }}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Danh sách tập phim -->
      <div v-if="selectedTab === 'overview'" class="mt-8 text-white">
        <h2 class="text-[20px] lg:text-[30px] leading-7 lg:leading-9">Danh sách tập phim</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 mt-4">
          <div v-for="(episode, index) in props.infoFilm?.episodes[0]?.server_data" :key="index"
            @click="watchMovie(index)"
            class="hover:scale-105 border border-gray-600 bg-gray-800 p-2 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300 text-xs lg:text-sm flex items-center justify-center">
            <span class="font-medium">Tập {{ episode.name }}</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { Episodes, Movie } from '@/types/movie';
import { ref, defineProps } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps<{
  infoFilm: {
    episodes: Episodes;
    movie: Movie;
  };
}>();
const router = useRouter();
const route = useRoute();
const slug = route.params.slug;

const selectedTab = ref<string>('overview');

function selectTab(tab: string) {
  selectedTab.value = tab;
}

function watchMovie(index: number) {
  router.push({
    name: 'MovieWatch',
    params: { slug: slug },
    query: { ep: index + 1, server: '1' }
  });
}
</script>
