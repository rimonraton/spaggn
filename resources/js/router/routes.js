import routesArtist from './routes-artist';
import siteRoutes from './site-routes';

const Settings = () => import('../Views/Settings.vue');
const Profile = () => import('../Views/Profile.vue');
const Password = () => import('../Views/Password.vue');
const Login = () => import('../Views/Authentication/Login.vue');
const Register = () => import('../Views/Authentication/Signup.vue');
const ForgotPassword = () => import('../Views/ForgotPassword.vue');
const ResetPassword = () => import('../Views/ResetPassword.vue');
const VerifyEmail = () => import('../Views/VerifyEmail.vue');
const Home = () => import('../Views/Home.vue');
const Welcome = () => import('../Views/Site/Home.vue')
const Admin = () => import('../layouts/AdminLayout.vue')
const Artist = () => import('../layouts/ArtistLayout.vue')
const Charity = () => import('../layouts/CharityLayout.vue')
const LandingLayout = () => import('../layouts/LandingLayout.vue')
export default [
    ...siteRoutes,
    ...routesArtist,
    {
        path: '/',
        component: Welcome,
        name: 'welcome',
    },
    {
        path: '/artist-dashboard',
        component: Artist,
        name: 'Artist',
    },
    {
        path: '/admin-dashboard',
        component: Admin,
        name: 'Admin',
    },
    {
        path: '/charity-dashboard',
        component: Charity,
        name: 'Charity',
    },
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
        path: '/:pathMatch(.*)*',
        redirect: '/home',

    }
];
