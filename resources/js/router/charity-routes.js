const CharityHome = () => import('../Views/Charity/pages/Home.vue');
const CharityProfile = () => import('../Views/Charity/pages/Profile.vue');
const CreateCharityProfile = () => import('../Views/Charity/pages/CreateProfile.vue');
const CharityLayout = () => import('../layouts/CharityLayout.vue')
const CharityMessage = () => import('../Views/Charity/pages/Messages.vue')
export default [
    {
        path: '/charityLayout',
        component: CharityLayout,
        name: 'CharityLayout',
        children: [
            {
                path: '/charity-home',
                component: CharityHome,
                name: 'Charity',
                meta: {
                    guard: 'auth'
                }
            },
            {
                path: '/charity-profile',
                component: CharityProfile,
                name: 'CharityProfile',
                meta: {
                    guard: 'auth'
                }
            },
            {
                path: '/create-your-organization-profile',
                component: CreateCharityProfile,
                name: 'CreateCharityProfile',
                meta: {
                    guard: 'auth'
                }
            },
            {
                path: '/charity-messages',
                component: CharityMessage,
                name: 'CharityMessage',
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
