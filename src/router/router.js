import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import EmployeesPage from "../pages/EmployeesPage.vue";
import EmployeeFormPage from "../pages/EmployeeFormPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/", component: Home
        },
        {
            path: "/employees", component: EmployeesPage
        },
        {
            path: "/employees/add", component: EmployeeFormPage
        },
        {
            path: "/employees/edit/:id", component: EmployeeFormPage
        }
    ]
});

export default router;
