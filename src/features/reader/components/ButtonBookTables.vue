<script>
import * as data from '../data.js';
import InfoBookTables from './InfoBookTables.vue';

export default {
  name:'ButtonBookTables',
  components: {
    InfoBookTables,
  },
  props:{
    bookTables:{
      type:String, default:'菜单',
    },
  },
  data(){
    return {
      bookTablesShow:true,
      tables:[
        {label:'书名', type:'title',},
        {label:'我的书', children:[
          {label:'婴儿',},
          {label:'小学',},
          {label:'中学',},
          {label:'大学',},
        ],},
        {label:'小说寻仙记', children:[
          {label:'诞生',},
          {label:'求仙',},
          {label:'入道',},
          {label:'悟道',},
        ],},
      ],
    };
  },
  computed: {
    bookTablesToggleClass() {
      const vue = this;
      return {
        showTables:vue.bookTablesShow,
      };
    },
  },
  methods:{
    toggleBookTables(){
      const vue = this;
      console.log('vue.bookTablesShow', vue.bookTablesToggleClass);
      vue.bookTablesShow = !vue.bookTablesShow;
    },
  },
}
</script>
<template>
<div class="position-relative">
  <slot>
    <div ref="buttonBookTables" @click="toggleBookTables">
      <span>{{bookTables}}</span>
    </div>
    <info-book-tables :tables="tables" class="book-tables" :class="bookTablesToggleClass"/>
  </slot>
</div>
</template>
<style>
.readerApp .page-footer .book-tables {
  display:none;
  position: absolute;
  bottom: 20px;
  height: 80vh;
  width: 60vw;
}
.readerApp .page-footer .book-tables.showTables {
  display:unset;
}
</style>
