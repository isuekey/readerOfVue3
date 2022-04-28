<script>
import * as data from './data.js';
export default {
  name:'ReaderPage',
  components: {
  },
  props: {
    readerApi:Object,
    readType:[String, Number],
  },
  computed:{
    isReadingPdf(){
      const vue = this;
      return vue.readType == data.readTypeEnum.pdf.key;
    },
    isReadingVedio(){
      const vue = this;
      return vue.readType == data.readTypeEnum.vedio.key;
    },
  }
}
</script>
<template>
<router-view></router-view>
</template>
<style>
</style>
