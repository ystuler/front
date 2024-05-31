import { createRouter, createWebHistory } from 'vue-router';

import HelloWorld from "../views/CardView.vue";
import RegFormComponent from "../components/RegFormComponent.vue";
import FormComponent from "../components/FormComponent.vue";
import RegVIew from "../views/RegVIew.vue";
import LoginView from "../views/LoginView.vue";
import CardView from "../views/CardView.vue";
import CreateCardComponent from "../components/Cards/CreateCardComponent.vue";
import NewCardComponent from "../components/Cards/NewCardComponent.vue";
import SCardView from "../views/SCardView.vue";
import CreateSCardView from "../views/CreateSCardView.vue";
import CollectionNameCreateComponent from "../components/CollectionNameCreateComponent.vue";
import EditCollectionCardsComponent from "../components/EditCollectionCardsComponent.vue";
import CollectionCardsComponent from "../components/CollectionCardsComponent.vue";
import UserComponent from "../components/UserComponent.vue"; // Импортируем компонент

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/collections',
            component: CardView
        },
        {
            path: '/reg',
            component: RegVIew
        },
        {
            path: '/',
            component: LoginView
        },
        {
            path: '/createcard',
            component: CreateCardComponent
        },
        {
            path: '/scards',
            component: SCardView
        },
        {
            path: '/createscard',
            component: CreateSCardView
        },
        {
            path: '/collectioncreateName',
            component: CollectionNameCreateComponent
        },
        {
            path: '/edit/:id',
            name: 'EditCollection',
            component: EditCollectionCardsComponent,
            props: true,
        },
        {
            path: '/collections/:id',
            name: 'CollectionCards',
            component: SCardView,
            props: true,
        },{
                    path: '/profile',
            name: 'UserCollection',
            component: UserComponent,
            props: true,
        }
    ]
})

export default router;
