<script setup>
defineOptions({
  name: 'tableComponent',
})
</script>
<template>
  <Table :style="{ 'table-layout': 'fixed' }">
    <slot />
  </Table>
</template>
