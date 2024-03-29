import routesArtist from './artist-routes';
import siteRoutes from './site-routes';
import charityRoutes from './charity-routes';
import adminRoutes from './admin-routes';

const Settings = () => import('../Pages/Settings.vue');
const Profile = () => import('../Pages/Profile.vue');
const Password = () => import('../Pages/Password.vue');
const Login = () => import('../Pages/Authentication/Login.vue');
const Register = () => import('../Pages/Authentication/Signup.vue');
const ForgotPassword = () => import('../Pages/ForgotPassword.vue');
const ResetPassword = () => import('../Pages/ResetPassword.vue');
const VerifyEmail = () => import('../Pages/VerifyEmail.vue');
const Home = () => import('../Pages/Home.vue');
// const Welcome = () => import('../Views/Site/Welcome.vue')
// const Admin = () => import('../layouts/AdminLayout.vue')
// const Artist = () => import('../layouts/ArtistLayout.vue')
// const Charity = () => import('../layouts/CharityLayout.vue')
// const LandingLayout = () => import('../layouts/LandingLayout.vue')
// const LayoutA = () => import('../layouts/LayoutA.vue')
// const Page2 = () => import('../Views/Site/Page2.vue')
export default [
    ...siteRoutes,
    ...routesArtist,
    ...charityRoutes,
    ...adminRoutes,
    // {
    //     path: '/',
    //     component: Welcome,
    //     name: 'welcome',
    // },

    // {
    //     path: '/artist-dashboard',
    //     component: Artist,
    //     name: 'Artist',
    // },
    // {
    //     path: '/admin-dashboard',
    //     component: Admin,
    //     name: 'Admin',
    // },
    // {
    //     path: '/charity-dashboard',
    //     component: Charity,
    //     name: 'Charity',
    // },
    {
        path: '/home',
        component: Home,
        name: 'home',
        meta: {
            guard: 'auth'
        }
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta: {
            guard: 'guest'
        }
    },
    {
        path: '/forgot-password',
        component: ForgotPassword,
        name: 'forgot-password',
        meta: {
            guard: 'guest'
        }
    },
    {
        path: '/reset-password/:token',
        props: route => ({
            token: route.params.token,
            email: route.query.email
        }),
        component: ResetPassword,
        name: 'reset-password',
        meta: {
            guard: 'guest'
        }
    },
    {
        path: '/register',
        component: Register,
        name: 'register',
        meta: {
            guard: 'guest'
        }
    },
    {
        path: '/verify-email/:id/:hash',
        props: route => ({
            id: route.params.id,
            hash: route.params.hash
        }),
        component: VerifyEmail,
        name: 'verify-email',

    },
    {
        path: '/settings',
        component: Settings,
        redirect: {
            name: 'profile'
        },
        name: 'settings',
        meta: {
            guard: 'auth'
        },
        children: [{
            path: 'profile',
            component: Profile,
            name: 'profile',
            meta: {
                guard: 'auth'
            },

        },
        {
            path: 'password',
            component: Password,
            name: 'password',
            meta: {
                guard: 'auth'
            },

        },

        ]
    },
    {
        path: '/404',
        component: () => import('../components/helper/404.vue'),
        name: '404'

    },
    {
        path: '/:pathMatch(.*)*',
        redirect: {
            name: 'welcome'
        },

    }
];
