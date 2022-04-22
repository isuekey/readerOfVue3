<script>
import * as data from '../data.js';
export default {
  name:'InfoBookTablesItem',
  props: {
    item: {
      type: Object, default() { return {};  },
    },
  },
}
</script>
<template>
<li>
  <div><span>{{item.label}}</span></div>  
  <ul v-if="!!item.children">
    <info-book-tables-item v-for="(subItem, index) in item.children" :key="index" :item="subItem" />
  </ul>
</li>
</template>
<style>

</style>
