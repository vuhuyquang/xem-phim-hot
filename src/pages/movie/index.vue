<template>
  <BannerDetailMovie />
  <MovieDetail :info="infoFilm" />
</template>

<script lang="ts" setup>
import BannerDetailMovie from "@/components/common/BannerDetailMovie/index.vue";
import MovieDetail from "@/components/movie/Detail/index.vue";
import { getFilmDetails } from "@/services/filmService";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const infoFilm = ref<any>();

const route = useRoute();
const slug = route.params.slug;

async function getDetail(slug: string) {
  try {
    const response = await getFilmDetails(slug)
    if (response?.data.status) {
      infoFilm.value = {
        episodes: response.data.episodes,
        movie: response.data.movie
      }
    }
    console.log(123, infoFilm);
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  getDetail(slug);
})
</script>