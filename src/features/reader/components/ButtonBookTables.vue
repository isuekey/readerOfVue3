<script>
import * as data from '../data.js';
export default {
  name:'ButtonBookTables',
  props:{
    bookTables:{
      type:String, default:'菜单',
    },
  },
}
</script>
<template>
<div class="position-relative">
  <slot>
    <div ref="buttonBookTables">{{bookTables}}</div>
  </slot>
</div>
</template>
<style>

</style>
