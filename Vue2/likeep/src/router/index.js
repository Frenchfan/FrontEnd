import {createRouter, createWebHistory} from 'vue-router'
import AboutPage from "@/views/AboutPage.vue";
import IndexPage from "@/views/IndexPage.vue";
import ContactPage from "@/views/ContactPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import LogoutPage from "@/views/LogoutPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import LinksPage from "@/views/LinksPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'index',
            component: IndexPage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactPage
        },
        {
            path: '/login',
            name: 'login',
            component: LoginPage
        },
        {
            path: '/logout',
            name: 'logout',
            component: LogoutPage
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterPage
        },
        {
            path: '/profile',
            name: 'profile',
            component: ProfilePage
        },
        {
            path: '/links',
            name: 'links',
            component: LinksPage
        },

    ]
})

export default router
