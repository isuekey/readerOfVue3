<script>
import * as data from '../data.js';
export default {
  name:'PageFooter',
  props:{
    footer:{
      type:String, default:'footer'
    },
  }
}
</script>
<template>
<div class="page-footer">
  <slot>
    {{ footer }}
  </slot>
</div>
</template>
<style>

</style>
