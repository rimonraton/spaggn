const ArtistHome = () => import('../Views/Artist/pages/Home.vue');
// const ArtistProfile = () => import('../Views/Artist/pages/Profile.vue');
const CreateArtistProfile = () => import('../Views/Artist/pages/CreateProfile.vue');
const ArtistLayout = () => import('../layouts/ArtistLayout.vue')
const ArtistMessage = () => import('../Views/Artist/pages/Messages.vue')
const CreateAssets = () => import('../Views/Artist/pages/CreateAssets.vue')
const ViewAssets = () => import('../Views/Artist/pages/ViewAssets.vue')
export default [
    {
        path: '/artist',
        component: ArtistLayout,
        name: 'ArtistLayout',
        children: [
            {
                path: '/your-home',
                component: ArtistHome,
                name: 'Artist',
                meta: {
                    guard: 'auth'
                }
            },
            // {
            //     path: '/artist-profile',
            //     component: ArtistProfile,
            //     name: 'ArtistProfile',
            //     meta: {
            //         guard: 'auth'
            //     }
            // },
            {
                path: '/create-your-profile',
                component: CreateArtistProfile,
                name: 'CreateArtistProfile',
                meta: {
                    guard: 'auth'
                }
            },
            {
                path: '/submit-your-assets',
                component: CreateAssets,
                name: 'CreateAssets',
                meta: {
                    guard: 'auth'
                }
            },
            {
                path: '/view-your-assets',
                component: ViewAssets,
                name: 'ViewAssets',
                meta: {
                    guard: 'auth'
                }
            },
            {
                path: '/your-messages',
                component: ArtistMessage,
                name: 'ArtistMessage',
                meta: {
                    guard: 'auth'
                }
            },
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/',

    }
];
