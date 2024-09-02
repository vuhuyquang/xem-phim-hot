<template>
  <BannerDetailMovie :infoFilm="infoFilm" v-if="!loading" />
  <MovieDetail :infoFilm="infoFilm" v-if="!loading" />
  <div v-else></div>
</template>

<script lang="ts" setup>
import BannerDetailMovie from "@/components/common/BannerDetailMovie/index.vue";
import MovieDetail from "@/components/movie/Detail/index.vue";
import { getFilmDetails } from "@/services/filmService";
import { Episodes, Movie } from "@/types/movie";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const loading = ref(true);
const infoFilm = ref<{
  episodes: Episodes,
  movie: Movie
}>({
  episodes: null,
  movie: null
});
const route = useRoute();
const slug = route.params.slug;

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
  getDetail(typeof slug === 'string' ? slug : slug[0])
});
</script>
