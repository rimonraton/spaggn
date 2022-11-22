const AdminHome = () => import('../Views/Admin/pages/Home.vue');
// const AdminProfile = () => import('../Views/Admin/pages/Profile.vue');
// const CreateAdminProfile = () => import('../Views/Admin/pages/CreateProfile.vue');
const AdminLayout = () => import('../layouts/AdminLayout.vue')
const ViewArtists = () => import('../Views/Admin/pages/Artists.vue')
const ViewCharities = () => import('../Views/Admin/pages/Charities.vue')
const ViewArtistProfile = () => import('../Views/Admin/pages/ArtistProfile.vue')
const ViewCharityProfile = () => import('../Views/Admin/pages/CharityProfile.vue')
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
                path: '/view-artisets',
                component: ViewArtists,
                name: 'ViewArtists',
                meta: {
                    guard: 'auth'
                }
            },
            {
                path: '/view-artist-profile/:id',
                component: ViewArtistProfile,
                name: 'ViewArtistProfile',
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
            {
                path: '/view-charity-profile/:id',
                component: ViewCharityProfile,
                name: 'ViewChatityProfile',
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
