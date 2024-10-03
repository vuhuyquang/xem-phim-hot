<template>
  <div class="overflow-x-hidden">
    <div class="h-screen w-screen flex flex-col items-center justify-center bg-[#111111]">
    <div class="text-white" v-if="loading">Loading...</div>
    <iframe v-else v-if="videoSrc" :src="videoSrc" class="w-[90vw] h-[90vh]" frameborder="0"
      allow="autoplay; fullscreen" allowfullscreen></iframe>
  </div>
  <div class="bg-[#111111] w-screen">
    <MovieDetail :infoFilm="infoFilm" v-if="!loading" />
  </div>
  </div>
</template>

<script lang="ts" setup>
import { getFilmDetails } from '@/services/filmService';
import { Episodes, Movie } from '@/types/movie';
import { onMounted, ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import MovieDetail from '@/components/movie/Detail/index.vue'

const loading = ref(true);
const infoFilm = ref<{
  episodes: Episodes,
  movie: Movie
}>({
  episodes: null,
  movie: null
});
const route = useRoute();
const slug = route.params.slug as string;
const ep = ref(route.query.ep || '1');
const videoSrc = ref('');

async function getDetail(slug: string) {
  try {
    const response = await getFilmDetails(slug);
    if (response?.data.status) {
      infoFilm.value = {
        episodes: response.data.episodes,
        movie: response.data.movie,
      };
      videoSrc.value = infoFilm.value.episodes[0].server_data[Number(ep.value) - 1]?.link_embed ?? '';
    }
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  getDetail(typeof slug === 'string' ? slug : slug[0]);
});

watch(
  () => route.query.ep, 
  (newEp) => {
    ep.value = newEp || '1';
    if (infoFilm.value && infoFilm.value.episodes) {
      videoSrc.value = infoFilm.value.episodes[0].server_data[Number(newEp) - 1]?.link_embed ?? '';
    }
  }
);
</script>