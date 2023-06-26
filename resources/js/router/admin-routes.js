const AdminHome = () => import('../Pages/Admin/pages/Home.vue');
// const AdminProfile = () => import('../Views/Admin/pages/Profile.vue');
// const CreateAdminProfile = () => import('../Views/Admin/pages/CreateProfile.vue');
const AdminLayout = () => import('../layouts/AdminLayout.vue')
const ViewArtists = () => import('../Pages/Admin/pages/Artists.vue')
const ViewCharities = () => import('../Pages/Admin/pages/Charities.vue')
const ViewArtistProfile = () => import('../Pages/Admin/pages/ArtistProfile.vue')
const ViewCharityProfile = () => import('../Pages/Admin/pages/CharityProfile.vue')
const BlogList = () => import('../Pages/Admin/pages/blogs/Index')
const AdminBlogsCreate = () => import('../Pages/Admin/pages/blogs/CreateBlog')

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
            {
                path: '/admin-blogs',
                component: BlogList,
                name: 'AdminBlogs',
                meta: {
                    guard: 'auth'
                }
            },
            {
                path: '/admin-blogs/create',
                component: AdminBlogsCreate,
                name: 'AdminBlogsCreate',
                meta: {
                    guard: 'auth'
                }
            },
            {
                path: '/admin-blogs/update/:id',
                component: AdminBlogsCreate,
                name: 'AdminBlogsUpdate',
                meta: {
                    guard: 'auth'
                }
            },
            {
                path: '/admin-blogs/show/:id',
                component: () => import('../Pages/Admin/pages/blogs/ShowPost'),
                name: 'ShowPost',
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
