<script setup>
const props = defineProps({
  contentType: {
    type: Array,
    required: true,
  },
})
</script>
<template>
  <thead>
    <tr :class="['border-b border-b-[#D8D8D8]']">
      <td
        v-for="content in props.contentType"
        :key="content.name"
        :class="['px-[10px]', 'border-r border-r-[#D8D8D8] last:border-r-0']"
        :width="content.width"
        :style="{
          'min-width': `${content.width}px`,
        }"
      >
        {{ content.name }}
      </td>
    </tr>
  </thead>
</template>
