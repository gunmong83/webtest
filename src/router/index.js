import Vue from 'vue';
import Router from 'vue-router';
import AppHome from '@/components/AppHome'
import AppCreate from '@/components/AppCreate'
import AppTable from '@/components/AppTable'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path:'/'
            ,component:AppHome
        },
        {
            path:'/table'
            ,component:AppTable
        },
        {
            path:'/create'
            ,component:AppCreate
        }
    ]
})