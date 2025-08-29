import { createRouter, createWebHistory } from 'vue-router'
import SuperManage from '@/views/SuperAdmin/SuperManage.vue'

const routes = [
    { path: '/', redirect: '/superadmin' },   // 根路径重定向到超级管理员页面
    { path: '/superadmin', name: 'SuperAdmin', component: SuperManage }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
