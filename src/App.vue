<script>
import * as features from './features/index.js';
export default {
  name:'ReaderApp',
  components: {
    ReaderPage: features.reader.ReaderPage,
  },
  data() {
    return {
    };
  },
  mounted() {
  },
};
</script>

<template>
  <reader-page />
</template>

<style>
@import './assets/base.css';
#app {
  width:100%;
  height:100%;
}
</style>
