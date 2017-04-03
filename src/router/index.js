import Vue from 'vue';
import Router from 'vue-router';
import MovieList from '@/components/MovieList';
import Hello from '@/components/Hello';
import Test from '@/components/Test';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MovieList',
      component: MovieList,
    }, {
      path: '/1',
      name: 'Test',
      component: Test,
    },
  ],
});
