<script setup>
const props = defineProps({
  contentType: {
    type: Array,
    required: true,
  },
  item: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <td
    v-for="content in props.contentType"
    :key="content.name"
    :class="['border-r border-r-[#D8D8D8] last:border-r-0']"
    :width="content.width"
    :style="{
      'min-width': `${content.width}px`,
    }"
  >
    <div
      :class="['truncate', 'px-[10px]']"
      :style="{
        'mix-width': `${content.width}px`,
      }"
    >
      {{ item[content.name] }}
    </div>
  </td>
</template>
