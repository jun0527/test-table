<script setup>
import { ref } from 'vue'

const menu = [
  {
    name: 'table',
    to: 'test.table',
  },
]
const isChange = ref(false)
</script>
<template>
  <div
    :class="[
      'w-[250px] bg-[#d4ffe1]',
      'flex flex-col justify-between',
      {
        '!w-[100px]': isChange,
      },
    ]"
  >
    <div>
      <template v-for="item in menu" :key="item.name">
        <router-link
          :to="item.to"
          :class="[
            'flex justify-center items-center w-full bg-white hover:bg-[#ebffea]',
            'py-[8px] border-b border-[#D8D8D8]',
          ]"
          >{{ item.name }}</router-link
        >
      </template>
    </div>
    <div :class="['flex justify-center', 'py-[10px] border-t border-t-[#D8D8D8]']">
      <button
        :class="['w-[80px] bg-[#3e3e3e] text-white', 'rounded-full']"
        @click="isChange = !isChange"
      >
        縮小
      </button>
    </div>
  </div>
</template>
