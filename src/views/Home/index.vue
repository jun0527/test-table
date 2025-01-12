<script setup>
import SidebarMenu from '@/components/Home/SidebarMenu.vue'
defineOptions({
  name: 'HomePage',
})
</script>

<template>
  <header :class="['h-[40px] bg-[#e5fcff]']">header</header>
  <div :class="['flex h-content']">
    <SidebarMenu :class="['flex-none h-full']" />
    <RouterView :class="['flex-1 h-full']" />
  </div>
</template>
