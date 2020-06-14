import Home from "../pages/Home";
import MediaList from "../pages/MediaList";
import ProdDetail from "../pages/ProdDetail";
import Page404 from "../pages/error/Page404";

export default [

    {
        path: '/',
        component: Home,
        name: 'home',
    },

    {
        path: '/detail/:type/:id',
        component: ProdDetail,
        name: 'prod-detail',
    },

    {
        path: '/:media/:page?',
        component: MediaList,
        name: 'media-list',
    },

    // Rota 404
    {
        path: '*', 
        name: '404',
        component: Page404
    },

]