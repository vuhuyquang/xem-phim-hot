<template>
  <div class="relative aspect-[3/2] lg:aspect-[25/9] bg-black">
    <!-- Hình nền -->
    <div class="absolute inset-0 lg:left-1/3">
      <img :src="props.infoFilm?.movie?.poster_url" :alt="props.infoFilm?.movie?.name"
        class="w-full h-full object-cover" />
    </div>

    <!-- Lớp phủ gradient -->
    <div
      class="absolute inset-0 px-24 flex flex-col justify-center lg:px-25 lg:w-2/3 lg:bg-gradient-to-r shadow-gradient">
      <div class="text-white animate-slide-up">
        <h1 class="text-4xl lg:text-5xl font-medium">{{ props.infoFilm?.movie?.name }}</h1>
        <div class="flex flex-row flex-wrap gap-2 items-center mt-4 text-sm">
          <div class="flex items-center">
            <StarFilled class="text-[#40c1ad] text-[18px]" />
            <StarFilled class="text-[#40c1ad] text-[18px]" />
            <StarFilled class="text-[#40c1ad] text-[18px]" />
            <StarFilled class="text-[#40c1ad] text-[18px]" />
            <StarOutlined class="text-[#40c1ad] text-[18px]" />
          </div>
          <div class="opacity-50 hidden md:block">{{ props.infoFilm?.movie?.tmdb?.vote_average }}</div>
          <span class="opacity-50 hidden md:block">·</span>
          <div class="opacity-50 hidden md:block">{{ props.infoFilm?.movie?.tmdb?.vote_count }} Đánh giá</div>
          <span class="opacity-50">·</span>
          <div class="opacity-50">2024</div>
          <span class="opacity-50">·</span>
          <div class="opacity-50">{{ props.infoFilm?.movie?.time }}</div>
        </div>
        <p class="mt-2 opacity-80 leading-relaxed line-clamp-3 md:line-clamp-5 text-xs md:text-base">{{
          props.infoFilm?.movie?.content }}</p>
      </div>
    </div>

    <!-- Nút Trailer trên di động -->
    <div class="lg:hidden absolute left-0 top-0 right-0 h-2/3 flex items-center justify-center">
      <button type="button" class="flex items-center px-10 text-5xl opacity-20 hover:opacity-80 transition">
        <PlayCircleOutlined class="text-5xl" />
      </button>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { Episodes, Movie } from '@/types/movie';
import { StarOutlined, StarFilled, PlayCircleOutlined } from '@ant-design/icons-vue';

const props = defineProps<{
  infoFilm: {
    episodes: Episodes;
    movie: Movie;
  };
}>();
</script>

<style scoped>
/* Hiệu ứng animation từ dưới lên */
@keyframes slide-up {
  from {
    transform: translateY(30px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Áp dụng animation cho phần tử */
.animate-slide-up {
  animation: slide-up 0.7s ease-out;
}

.shadow-custom {
  box-shadow: 300px 0 100px 50px rgba(0, 0, 0, 0.8);
}

@media (min-width: 1024px) {
  .lg\:bg-gradient-to-r {
    --tw-gradient-from: rgba(0, 0, 0, 1);
    --tw-gradient-stops: rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 50%, transparent 100%;
    background-image: linear-gradient(to right, var(--tw-gradient-stops));
  }
}
</style>