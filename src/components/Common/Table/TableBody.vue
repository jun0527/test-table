<script setup>
import TableRow from './TableRow.vue'
const props = defineProps({
  contentType: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    default: () => [],
  },
})
</script>
<template>
  <tbody>
    <tr :class="['border-b border-b-[#D8D8D8]']" v-for="item in data" :key="item.id">
      <TableRow :content-type="props.contentType" :item="item" />
    </tr>
  </tbody>
</template>
