const AdminHome = () => import('../Views/Admin/pages/Home.vue');
// const AdminProfile = () => import('../Views/Admin/pages/Profile.vue');
// const CreateAdminProfile = () => import('../Views/Admin/pages/CreateProfile.vue');
const AdminLayout = () => import('../layouts/AdminLayout.vue')
const ViewCharities = () => import('../Views/Admin/pages/Charities.vue')
export default [
    {
        path: '/adminLayout',
        component: AdminLayout,
        name: 'AdminLayout',
        children: [
            {
                path: '/admin-home',
                component: AdminHome,
                name: 'Admin',
                meta: {
                    guard: 'auth'
                }
            },
            {
                path: '/view-charities',
                component: ViewCharities,
                name: 'ViewCharities',
                meta: {
                    guard: 'auth'
                }
            },
            // {
            //     path: '/Admin-profile',
            //     component: AdminProfile,
            //     name: 'AdminProfile',
            //     meta: {
            //         guard: 'auth'
            //     }
            // },
            // {
            //     path: '/setting',
            //     component: CreateAdminProfile,
            //     name: 'CreateAdminProfile',
            //     meta: {
            //         guard: 'auth'
            //     }
            // },
            // {
            //     path: '/Admin-messages',
            //     component: AdminMessage,
            //     name: 'AdminMessage',
            //     meta: {
            //         guard: 'auth'
            //     }
            // },
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/',

    }
];
