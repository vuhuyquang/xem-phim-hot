<template>
  <div class="relative aspect-[3/2] lg:aspect-[25/9] bg-black">
    <!-- Hình nền -->
    <div class="absolute inset-0 lg:left-1/3">
      <img src="https://movies-proxy.vercel.app/ipx/f_webp&s_1220x659/tmdb/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg"
        alt="Hình nền" class="w-full h-full object-cover" />
    </div>

    <!-- Lớp phủ gradient -->
    <div class="absolute inset-0 px-24 flex flex-col justify-center lg:px-25 lg:w-2/3 to-transparent bg-gradient-to-r from-black shadow-gradient">
      <div class="text-white animate-slide-up">
        <h1 class="text-4xl lg:text-5xl font-bold mt-2">Deadpool & Wolverine</h1>
        <div class="flex flex-row flex-wrap gap-2 items-center mt-4 text-sm">
          <div class="flex items-center mb-1">
            <StarOutlined class="text-custom-green" />
            <StarOutlined class="text-custom-green" />
            <StarOutlined class="text-custom-green" />
            <StarOutlined class="text-custom-green" />
            <StarOutlined class="text-custom-green" />
          </div>
          <div class="opacity-50 hidden md:block">7.8</div>
          <span class="opacity-50 hidden md:block">·</span>
          <div class="opacity-50 hidden md:block">1.9K Đánh giá</div>
          <span class="opacity-50">·</span>
          <div class="opacity-50">2024</div>
          <span class="opacity-50">·</span>
          <div class="opacity-50">2h 8min</div>
        </div>
        <p class="mt-2 opacity-80 leading-relaxed line-clamp-3 md:line-clamp-5 text-xs md:text-base">
          Wade Wilson, một nhân vật mệt mỏi trong cuộc sống dân sự, đã bỏ lại những ngày tháng là tên lính đánh thuê
          Deadpool. Nhưng khi thế giới của anh đối mặt với một mối đe dọa nghiêm trọng, Wade buộc phải trở lại với bộ đồ
          chiến đấu, lần này cùng với Wolverine, người cũng không mấy vui vẻ.
        </p>
        <div class="py-5 hidden lg:block">
          <button type="button"
            class="flex gap-2 items-center px-6 py-3 bg-transparent hover:bg-gray-300 hover:text-black transition"
            title="Xem Trailer">
            <PlayCircleOutlined class="text-xl mb-1" /> Xem ngay
          </button>
        </div>
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
import { StarOutlined, PlayCircleOutlined } from '@ant-design/icons-vue';
</script>

<style scoped>
/* Định nghĩa màu xanh mint cho sao */
.text-custom-green {
  color: #40c1ad;
}

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
</style>
