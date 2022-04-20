<script>
import ReaderPdf from './ReaderOfPdf.vue';
import ReaderVedio from './ReaderOfVedio.vue';
import * as data from './data.js';
export default {
  name:'ReaderPage',
  components: {
    ReaderPdf, ReaderVedio,
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
<reader-pdf v-if="isReadingPdf" />
<reader-vedio v-if="isReadingVedio" />
</template>
<style>
</style>
