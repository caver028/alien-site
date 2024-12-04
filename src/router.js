import {createRouter, createWebHistory} from 'vue-router'
import Home from "./vues/Home.vue";
import About from "./vues/About.vue";
import Alien from "./vues/Alien.vue";
import AlienDetails from "./AlienDetails.vue";
import AboutDesigner from "./vues/AboutDesigner.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // your routes go here
        {
            path: '/home',
            name: 'Home',
            component: Home,
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/aboutdesigner',
            name: 'AboutDesigner',
            component: AboutDesigner
        },
        {
            path: '/aliens',
            name: 'Alien',
            children: [
                {
                    path: '',
                    name: 'AllAliens',
                    component: Alien
                },
                {
                    path: 'details/:id',
                    name: "AlienDetails",
                    component: AlienDetails,
                }
            ]
        }
    ]
})

export default router