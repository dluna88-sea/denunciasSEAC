import { createRouter, createWebHistory } from 'vue-router';
import { auth, db } from './firebase'

/**
 * Ejemplo de un middleware:
 */
import { currentUserStore } from './stores/currentUser';
const isAuth = async(to, from, next) => {
    const currentUser = currentUserStore();
    await currentUser.isAuth().then((user) => {
        if(user) next();
        else next('/login');
    })
}

const isGuest = async(to, from, next) => {
    const currentUser = currentUserStore();
    await currentUser.isAuth().then((user) => {
        if(!user) next();
        else next('/');
    })
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { 
            path:'/', 
            name: 'Dashboard', 
            component: () => import('./views/Dashboard.vue'), 
            beforeEnter: isAuth
        },
        { 
            path:'/login', 
            name: 'Login', 
            component: () => import('./views/Login.vue'), 
            beforeEnter: isGuest
        },

        { 
            path:'/logout', 
            name: 'Logout', 
            component: () => import('./views/Logout.vue'), 
            beforeEnter: isAuth
        },
        { 
            path:'/profile', 
            name: 'Profile', 
            component: () => import('./views/user/Profile.vue'), 
            beforeEnter: isAuth
        },
        
        //Error 404
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('./views/404.vue'),
        }
    ]
});

export default router;