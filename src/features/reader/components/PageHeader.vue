<script>
import * as data from '../data.js';
export default {
  name:'PageHeader',
  props:{
    title:{
      type:String, default:'page title',
    },
    showHistoryBack:{
      type: Boolean, default: true,
    },
    showMenu:{
      type: Boolean, default: true,
    },
    showTitle: {
      type: Boolean, default: true,
    },
  },
}
</script>
<template>
<div class="page-header">
  <div class="historyBack">
    <slot name="history" v-if="showHistoryBack">
      &lt
    </slot>
  </div>
  <div class="page-header-title" >
    <slot name="title" v-if="showTitle">
      {{title}}
    </slot>
  </div>
  <div class="page-header-menu">
    <slot name="menu"  v-if="showMenu">menu</slot>
  </div>
</div>
</template>
<style>
</style>
