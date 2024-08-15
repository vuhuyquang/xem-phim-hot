<template>
  <div class="flex flex-col h-screen lg:flex-row">
    <SidebarLargeScreen />

    <div class="flex-1 lg:ml-[70px] overflow-auto bg-[#111]">
      <main><router-view></router-view></main>
    </div>

    <SidebarSmallScreen />
  </div>
</template>

<script lang="ts" setup>
import SidebarLargeScreen from "@/components/common/SidebarLargeScreen/index.vue";
import SidebarSmallScreen from "@/components/common/SidebarSmallScreen/index.vue";
</script>
