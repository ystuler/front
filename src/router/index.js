import {createRouter, createWebHistory} from 'vue-router'

import HelloWorld from "../components/HelloWorld.vue";
import RegFormComponent from "../components/RegFormComponent.vue";
import FormComponent from "../components/FormComponent.vue";
import RegVIew from "../views/RegVIew.vue";
import LoginView from "../views/LoginView.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HelloWorld
        },
        {
            path: '/reg',
            component: RegVIew
        },
        {
            path: '/login',
            component:LoginView
        }

    ]
})

export default router
