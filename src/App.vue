<script>
import * as features from './features/index.js';
import * as ReaderClasses from './reader.class.js';

export default {
  name:'ReaderApp',
  components: {
    ReaderPage: features.reader.ReaderPage,
  },
  data() {
    const readerAPI = new ReaderClasses.ReaderAPI();
    return {
      readerAPI,
      readType: features.reader.data.readTypeEnum.pdf.key,
    };
  },
};
</script>

<template>
  <reader-page :readerApi="readerAPI" :readType="readType" />
</template>

<style>
@import './assets/base.css';
#app {
  width:100%;
  height:100%;
}
</style>
