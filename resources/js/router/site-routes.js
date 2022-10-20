const Funding = () => import('../Views/Site/Funding.vue');
const ExploreCharities = () => import('../Views/Site/Charities.vue');
const ExploreArtists = () => import( "../Views/Site/Artists.vue");
const Blog = () => import( "../Views/Site/Blogs.vue");
const Projects = () => import( "../Views/Site/Projects.vue");
const Home = () => import( "../Views/Site/Home.vue");
const Welcome = () => import( "../Views/Site/Welcome.vue");
const ArtistDetails = () => import( "../Views/Site/ArtistDetails.vue");
const CharityDetails = () => import( "../Views/Site/CharityDetails.vue");
const LandingLayout = () => import('../layouts/LandingLayout.vue')
const ListCharities = () => import('../Views/Site/ListCharities.vue')
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
                path: "/funding",
                component: Funding,
                name: "Funding",
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
                path: "/list-charities",
                component: ListCharities,
                name: "ListCharities",
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
                path: "/projects",
                component: Projects,
                name: "Projects",
                // meta: {
                //     layout: ArtistLayout,
                // },
            },
            {
                path: "/artist-details/:id",
                component: ArtistDetails,
                name: "ArtistDetails",
                // meta: {
                //     layout: ArtistLayout,
                // },
            },
            {
                path: "/charity-details/:id",
                component: CharityDetails,
                name: "CharityDetails",
                // meta: {
                //     layout: ArtistLayout,
                // },
            },
        ],
    },
];
