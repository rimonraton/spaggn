const ArtistHome = () => import('../Views/Artist/pages/Home.vue');
const ArtistProfile = () => import('../Views/Artist/pages/Profile.vue');
const CreateArtistProfile = () => import('../Views/Artist/pages/CreateProfile.vue');
const ArtistLayout = () => import('../layouts/ArtistLayout.vue')
const ArtistMessage = () => import('../Views/Artist/pages/Messages.vue')
export default [
    {
        path: '/artist',
        component: ArtistLayout,
        name: 'ArtistLayout',
        children: [
            {
                path: '/artist-home',
                component: ArtistHome,
                name: 'Artist',
                meta: {
                    guard: 'auth'
                }
            },
            {
                path: '/artist-profile',
                component: ArtistProfile,
                name: 'ArtistProfile',
                meta: {
                    guard: 'auth'
                }
            },
            {
                path: '/create-artist-profile',
                component: CreateArtistProfile,
                name: 'CreateArtistProfile',
                meta: {
                    guard: 'auth'
                }
            },
            {
                path: '/artist-messages',
                component: ArtistMessage,
                name: 'ArtistMessage',
                meta: {
                    guard: 'auth'
                }
            },
        ]
    },
    // {
    //     path: '/artist-home',
    //     component: ArtistHome,
    //     name: 'ArtistHome',
    //     meta: {
    //         layout: ArtistLayout
    //     }
    // },
    // {
    //     path: '/artist-profile',
    //     component: ArtistProfile,
    //     name: 'ArtistProfile',
    // },
    // {
    //     path: '/create-artist-profile',
    //     component: CreateArtistProfile,
    //     name: 'CreateArtistProfile',
    // },
    // {
    //     path: '/artist-messages',
    //     component: ArtistMessage,
    //     name: 'ArtistMessage',
    // },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/',

    }
];
