const WhyGGN = () => import('../Views/Site/WhyGGN.vue');
const ExploreCharities = () => import('../Views/Site/Charities.vue');
const ExploreArtists = () => import( "../Views/Site/Artists.vue");
const Blog = () => import( "../Views/Site/Blogs.vue");
const Community = () => import( "../Views/Site/Community.vue");
const Home = () => import( "../Views/Site/Home.vue");
const Welcome = () => import( "../Views/Site/Welcome.vue");
const LandingLayout = () => import('../layouts/LandingLayout.vue')
export default [
     {
        path: '/',
        component: Welcome,
        name: 'welcome',
    },
    {
        path: "/site",
        name: "LandingLayout",
        component: LandingLayout,
        children: [
            {
                path: "/why-ggn",
                component: WhyGGN,
                name: "WhyGGN",
                // meta: {
                //     layout: ArtistLayout,
                // },
            },
            {
                path: "/charities",
                component: ExploreCharities,
                name: "ExploreCharities",
                // meta: {
                //     layout: ArtistLayout,
                // },
            },
            {
                path: "/artists",
                component: ExploreArtists,
                name: "ExploreArtists",
                // meta: {
                //     layout: ArtistLayout,
                // },
            },
            {
                path: "/blog",
                component: Blog,
                name: "Blog",
                // meta: {
                //     layout: ArtistLayout,
                // },
            },
            {
                path: "/community",
                component: Community,
                name: "Community",
                // meta: {
                //     layout: ArtistLayout,
                // },
            },
        ],
    },
    // {
    //     path: '/why-ggn',
    //     component: WhyGGN,
    //     name: 'WhyGGN',
    //     meta: {
    //         layout: ArtistLayout
    //     }
    // },
    // {
    //     path: '/charities',
    //     component: ExploreCharities,
    //     name: 'ExploreCharities',
    //     meta: {
    //         layout: ArtistLayout
    //     }
    // },
    // {
    //     path: '/artists',
    //     component: ExploreArtists,
    //     name: 'ExploreArtists',
    //     meta: {
    //         layout: ArtistLayout
    //     }
    // },
    // {
    //     path: '/blog',
    //     component: Blog,
    //     name: 'Blog',
    //     meta: {
    //         layout: ArtistLayout
    //     }
    // },
    // {
    //     path: '/community',
    //     component: Community,
    //     name: 'Community',
    //     meta: {
    //         layout: ArtistLayout
    //     }
    // },
];
