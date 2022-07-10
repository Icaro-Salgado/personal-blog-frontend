import { createRouter, createWebHashHistory } from 'vue-router'

import BlogPost from '@/components/BlogPost'
import BlogAuthor from '@/components/BlogAuthor'
import PostsByTag from '@/components/PostsByTag'
import AllPosts from '@/components/AllPosts'

const routes = [
    { path: '/author/:username', component: BlogAuthor },
    { path: '/post/:slug', component: BlogPost },
    { path: '/tag/:tag', component: PostsByTag },
    { path: '/', component: AllPosts },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router