import {createRouter, createWebHistory} from 'vue-router'

import HelloWorld from "../views/CardView.vue";
import RegFormComponent from "../components/RegFormComponent.vue";
import FormComponent from "../components/FormComponent.vue";
import RegVIew from "../views/RegVIew.vue";
import LoginView from "../views/LoginView.vue";
import CardView from "../views/CardView.vue";
import CreateCardComponent from "../components/Cards/CreateCardComponent.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/cards',
            component: CardView
        },
        {
            path: '/reg',
            component: RegVIew
        },
        {
            path: '/login',
            component:LoginView
        },
        {
            path: '/createcard',
            component: CreateCardComponent
        }

    ]
})

export default router
