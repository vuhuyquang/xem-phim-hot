<template>
    <div class="h-screen w-screen flex items-center justify-center bg-[#111111]">
      <div class="text-white" v-if="loading">Loading...</div>
      <iframe
        v-else
        v-if="videoSrc"
        :src="videoSrc"
        class="w-[90vw] h-[90vh]"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { getFilmDetails } from '@/services/filmService';
  import { Episodes, Movie } from '@/types/movie';
  import { onMounted, ref, computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  const loading = ref(true);
  const infoFilm = ref<{
    episodes: Episodes,
    movie: Movie
  }>(null);
  const route = useRoute();
  const slug = route.params.slug as string;
  const ep = route.query.ep;
  
  async function getDetail(slug: string) {
    try {
      const response = await getFilmDetails(slug);
      if (response?.data.status) {
        infoFilm.value = {
          episodes: response.data.episodes,
          movie: response.data.movie,
        };
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
  
  const videoSrc = computed(() => {
    if (infoFilm.value && ep) {
      return infoFilm.value.episodes[0].server_data[Number(ep) - 1]?.link_embed ?? '';
    }
    return '';
  });
  </script>
  