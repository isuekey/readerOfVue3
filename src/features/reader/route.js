import ReaderOfPdf from './ReaderOfPdf.vue';
import ReaderOfVedio from './ReaderOfVedio.vue';
import ReaderPage from './ReaderPage.vue';

export const routes = [
  {
    path:'/reader', component:ReaderPage,
    children:[{
      path:'pdf', component:ReaderOfPdf,
    },{
      path:'vedio', component:ReaderOfVedio,
    }],
  },
];
