<template>
  <a-form :model="filters" layout="vertical" class="w-full px-5">
    <a-row :gutter="16">
      <a-col :span="6">
        <a-form-item label="Sắp xếp" name="sort_field">
          <a-select v-model:value="filters.sort_field" placeholder="Chọn loại sắp xếp">
            <a-select-option value="">Tất cả</a-select-option>
            <a-select-option value="year">Năm sản xuất</a-select-option>
            <a-select-option value="modified.time">Thời gian cập nhật</a-select-option>
            <a-select-option value="_id">Thời gian đăng</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="6">
        <a-form-item label="Thể loại" name="category">
          <a-select v-model:value="filters.category" placeholder="Chọn thể loại"></a-select>
        </a-form-item>
      </a-col>
      <a-col :span="6">
        <a-form-item label="Quốc gia" name="country">
          <a-select v-model:value="filters.country" placeholder="Chọn quốc gia"></a-select>
        </a-form-item>
      </a-col>
      <a-col :span="6">
        <a-form-item label="Danh mục" name="slug">
          <a-select v-model:value="filters.slug" placeholder="Chọn danh mục">
            <a-select-option value="">Tất cả</a-select-option>
            <a-select-option value="phim-le">Phim lẻ</a-select-option>
            <a-select-option value="phim-bo">Phim bộ</a-select-option>
            <a-select-option value="tv-shows">TV Shows</a-select-option>
            <a-select-option value="phim-vietsub">Phim vietsub</a-select-option>
            <a-select-option value="phim-thuyet-minh">Phim thuyết minh</a-select-option>
            <a-select-option value="phim-long-tieng">Phim lồng tiếng</a-select-option>
            <a-select-option value="phim-bo-dang-chieu">Phim bộ đang chiếu</a-select-option>
            <a-select-option value="phim-bo-hoan-thanh">Phim bộ hoàn thành</a-select-option>
            <a-select-option value="phim-sap-chieu">Phim sắp chiếu</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const filters = reactive({
  sort_field: '',
  category: '',
  country: '',
  slug: '',
  page: 1
})
</script>