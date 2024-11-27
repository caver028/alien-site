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
            path: '/alien',
            name: 'Alien',
            component: Alien,
            children: [
                {
                    name: "AlienDetails",
                    path: 'details/:id',
                    component: AlienDetails,
                }
            ]
        },
    ]
})

export default router