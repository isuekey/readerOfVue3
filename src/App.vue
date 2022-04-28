<script>
import * as ReaderClasses from './reader.class.js';

export default {
  name:'ReaderApp',
  components: {
  },
  data() {
    const readerAPI = new ReaderClasses.ReaderAPI();
    return {
      readerAPI,
    };
  },
};
</script>

<template>
<router-view></router-view>
</template>

<style>
@import './assets/base.css';
#app {
  width:100%;
  height:100%;
}
</style>
