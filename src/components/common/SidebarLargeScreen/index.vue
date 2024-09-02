<template>
  <!-- Sidebar for large screens -->
  <aside
    class="lg:w-[70px] lg:bg-black lg:text-white lg:fixed lg:h-full lg:flex lg:flex-col lg:items-center lg:border-r lg:border-[#1f2123] hidden">
    <nav class="mt-10 flex-1 flex flex-col justify-evenly">
      <router-link @click.native="setSelectPage('home')" to="/" class="block text-center">
        <a-tooltip title="Trang chủ">
          <HomeOutlined
            :class="['text-2xl', selectPage === 'home' ? 'text-[#40c1ad]' : 'text-white', 'hover:text-[#40c1ad]', 'transition', 'delay-[45ms]']" />
        </a-tooltip>
      </router-link>
      <router-link @click.native="setSelectPage('movie')" to="/search" class="block text-center">
        <a-tooltip title="Phim">
          <VideoCameraOutlined
            :class="['text-2xl', selectPage === 'movie' ? 'text-[#40c1ad]' : 'text-white', 'hover:text-[#40c1ad]', 'transition', 'delay-[45ms]']" />
        </a-tooltip>
      </router-link>
      <router-link @click.native="setSelectPage('tv')" to="/tv" class="block text-center">
        <a-tooltip title="Chương trình TV">
          <LaptopOutlined
            :class="['text-2xl', selectPage === 'tv' ? 'text-[#40c1ad]' : 'text-white', 'hover:text-[#40c1ad]', 'transition', 'delay-[45ms]']" />
        </a-tooltip>
      </router-link>
      <router-link @click.native="setSelectPage('search')" to="/search" class="block text-center">
        <a-tooltip title="Tìm kiếm">
          <SearchOutlined
            :class="['text-2xl', selectPage === 'search' ? 'text-[#40c1ad]' : 'text-white', 'hover:text-[#40c1ad]', 'transition', 'delay-[45ms]']" />
        </a-tooltip>
      </router-link>
    </nav>
  </aside>
</template>

<script lang="ts" setup>
import { HomeOutlined, VideoCameraOutlined, LaptopOutlined, SearchOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';

type MediaPage = 'home' | 'movie' | 'tv' | 'search';

const selectPage = ref<MediaPage>('home');

function setSelectPage(mediaPage: MediaPage) {
  selectPage.value = mediaPage;
}
</script>