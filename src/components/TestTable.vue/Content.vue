<script setup>
import Table from '@/components/Common/Table/index.vue'
import TableHeader from '../Common/Table/TableHeader.vue'
import TableBody from '../Common/Table/TableBody.vue'
defineOptions({
  name: 'TableContent',
})
const contentType = [
  {
    name: 'name',
    width: 100,
  },
  {
    name: 'value',
    width: 150,
  },
  {
    name: 'email',
    width: 175,
  },
  {
    name: 'type',
    width: 75,
  },
]
const data = [
  {
    name: 'aaa',
    value: 'aaaaa',
    email: 'aaaaaaa',
    type: 'aa',
  },
  {
    name: 'bbb',
    value: 'bbb',
    email: 'bbb',
    type: 'bbbbbbbbbbbb',
  },
]
</script>
<template>
  <Table :class="['w-full']">
    <TableHeader :content-type="contentType" />
    <TableBody :content-type="contentType" :data="data" />
  </Table>
</template>
