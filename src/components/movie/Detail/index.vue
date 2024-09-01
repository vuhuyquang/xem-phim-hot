<template>
  <div class="flex flex-col h-screen">
    <div class="flex justify-center">
      <ul class="flex space-x-8 cursor-pointer mt-8 mb-10 text-xl">
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
    <div class="container mx-auto max-w-[1200px]">
      <div class="flex flex-row w-full">
        <div class="w-[28%] p-1 bg-[#1f2021]">
          <img class="w-full h-[506px]"
            src="https://movies-proxy.vercel.app/ipx/f_webp&s_400x600/tmdb/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"
            alt="Ảnh phim">
        </div>
        <div class="w-[72%] p-12 text-white">
          <div>
            <h2 class="text-[30px] leading-9">Cốt truyện</h2>
            <p class="opacity-80 leading-[1.65rem]">Một Wade Wilson vô hồn đang vật lộn với cuộc sống thường dân với
              những ngày tháng của anh như một lính đánh thuê có đạo đức, Deadpool, đã qua. Nhưng khi quê hương của anh
              phải đối mặt với một mối đe dọa hiện hữu, Wade phải miễn cưỡng mặc lại bộ đồ với một Wolverine còn miễn
              cưỡng hơn.</p>
          </div>
          <div class="flex flex-row opacity-80 leading-[1.65rem] text-[14px]">
            <div class="w-1/2">
              <table class="w-full border-separate">
                <tr>
                  <td class="whitespace-nowrap w-1/3">Phát hành</td>
                  <td>24/7/2024</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap">Đạo diễn</td>
                  <td>Shawn Adam Levy</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap">Đạo diễn</td>
                  <td>Shawn Adam Levy</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap">Doanh thu</td>
                  <td>$1.222.765.573</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap">Trạng thái</td>
                  <td>Phát hành</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap">Sản xuất</td>
                  <td>Marvel Studios, Maximum Effort, 21 Laps Entertainment, 20th Century Studios, Kevin Feige
                    Productions, TSG Entertainment</td>
                </tr>
              </table>
            </div>
            <div class="w-1/2">
              <table class="w-full border-separate">
                <tr>
                  <td class="whitespace-nowrap w-1/3">Thời gian</td>
                  <td>2 giờ 8 phút</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap">Ngân sách</td>
                  <td>$200.000.000</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap">Thể loại</td>
                  <td>Hành động, Hài kịch</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap">Ngôn ngữ</td>
                  <td>Tiếng Anh</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
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
