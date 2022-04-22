<script>
import * as data from '../data.js';
import TableItem from './InfoBookTablesItem.vue';
export default {
  name:'InfoBookTables',
  props: {
    tables: {
      type:Array, default() { return []; },
    },
  },
  components: {
    TableItem,
  },
}
</script>
<template>
<ul>
  <table-item v-for="(item, index) in tables" :key="index" :item="item" >
  </table-item>
</ul>
</template>
<style>

</style>
