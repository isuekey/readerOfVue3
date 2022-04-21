<script>
import * as components from './components/index.js';
import * as data from './data.js';
export default {
  name: data.readTypeEnum.pdf.vueName,
  components: {
    ButtonBookTables: components.ButtonBookTables,
    ButtonProgress: components.ButtonProgress,
    ButtonScaleDown: components.ButtonScaleDown,
    ButtonScaleUp: components.ButtonScaleUp,
    
    PageHeader: components.PageHeader,
    PageContainer: components.PageContainer,
    PageFooter: components.PageFooter,
  },
}
</script>
<template>
<div class="reader-page">
  <page-header/>
  <page-container>
  </page-container>
  <page-footer>
    <button-book-tables/>
    <button-progress />
    <button-scale-down />
    <button-scale-up />
  </page-footer>
</div>
</template>
<style>

</style>
