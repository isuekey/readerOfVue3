<script>
import * as components from './components/index.js';
import * as data from './data.js';
export default {
  name: data.readTypeEnum.pdf.vueName,
  components: {
    PageHeader: components.PageHeader,
    PageContainer: components.PageContainer,
    PageFooter: components.PageFooter,
  },
}
</script>
<template>
<div class="reader-page">
  <page-header />
  <page-container />
  <page-footer />
</div>
</template>
<style>

</style>
