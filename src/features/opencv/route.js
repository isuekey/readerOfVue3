import OpenCV from './OpenCVPage.vue';
import OpenCVBlock from './OpenCVBlock.vue';

export const routes = [{
  path:'/opencv', component: OpenCV,
  children:[{
    path:'block', component: OpenCVBlock,
  }],
}];
