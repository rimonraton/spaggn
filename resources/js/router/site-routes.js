const NftExplained = () => import('../Pages/Site/NftExplained.vue');
const Funding = () => import('../Pages/Site/Funding.vue');
const ExploreCharities = () => import('../Pages/Site/Charities.vue');
const CharityDetails = () => import( "../Pages/Site/CharityDetails.vue");
const ExploreArtists = () => import( "../Pages/Site/Artists.vue");
const Blog = () => import( "../Pages/Site/Blogs.vue");
const BlogDetails = () => import( "../Pages/Site/BlogDetails.vue");

const Projects = () => import( "../Pages/Site/Projects.vue");
const Home = () => import( "../Pages/Site/Home.vue");
const Welcome = () => import( "../Pages/Site/Welcome.vue");
const ArtistDetails = () => import( "../Pages/Site/ArtistDetails.vue");
const LandingLayout = () => import('../layouts/LandingLayout.vue')
const ListCharities = () => import('../Pages/Site/ListCharities.vue')

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
                path: "/NftExplained",
                component: NftExplained,
                name: "NftExplained",
                // meta: {
                //     layout: ArtistLayout,
                // },
            },
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
                path: "/charity-details/:id",
                component: CharityDetails,
                name: "CharityDetails",
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
                path: "/artist-details/:id",
                component: ArtistDetails,
                name: "ArtistDetails",
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
                path: "/blog-details/:slug/:post",
                component: BlogDetails,
                name: "BlogDetails",
            },
            {
                path: "/projects",
                component: Projects,
                name: "Projects",
                // meta: {
                //     layout: ArtistLayout,
                // },
            },
        ],
    },
];
