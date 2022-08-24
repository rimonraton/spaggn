import WhyGGN from "../Views/Site/WhyGGN.vue";
import ExploreCharities from "../Views/Site/Charities.vue";
import ExploreArtists from "../Views/Site/Artists.vue";
import Blog from "../Views/Site/Blogs.vue";
import Community from "../Views/Site/Community.vue";
import Home from "../Views/Site/Home.vue";
import Welcome from "../Views/Site/Welcome.vue";
const LandingLayout = ()=> import('../layouts/LandingLayout.vue')
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
