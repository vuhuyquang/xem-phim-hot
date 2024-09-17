<template>
  <div class="p-10 flex flex-col gap-2">
    <h2 class="text-white text-2xl">Phim Mới Cập Nhật</h2>
    <div class="flex flex-row gap-3 cursor-pointer overflow-x-auto pb-6 will-change-transform scroll-smooth">
      <div v-for="(item, index) in films" :key="index">
        <router-link :to="{ name: 'MovieDetail', params: { slug: item.slug } }">
          <img class="border-solid border-4 border-[#1F2021] min-w-[240px] min-h-[384px] max-w-[240px] max-h-[384px]"
            width="240" height="384" :src="`https://img.ophim.live/uploads/movies/${item.thumb_url}`"
            :alt="`${item.slug}`">
          <div class="flex flex-col gap-1 mt-4">
            <h4 class="text-white">{{ item.name }}</h4>
            <div class="flex items-center text-sm text-[#40c1ad]">
              <StarFilled v-for="n in convertToStars(item.tmdb.vote_average)" :key="n" />
              <StarOutlined v-for="n in (5 - convertToStars(item.tmdb.vote_average))" :key="n" />
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { getRecentlyUpdatedFilms } from '@/services/filmService';
import { StarFilled, StarOutlined } from '@ant-design/icons-vue';

const films = ref<any[]>([]);

function convertToStars(rating: number): number {
  if (isNaN(rating) || rating < 0 || rating > 10) {
    return 0;
  }
  return Math.max(0, Math.min(5, Math.round(rating / 2)));
}


async function fetchFilms() {
  try {
    const response = await getRecentlyUpdatedFilms();

    if (response.data.status) {
      films.value = response.data.items;
    }
  } catch (error) {
    console.error('Error fetching films:', error);
  }
}

onMounted(() => {
  fetchFilms();
})
</script>