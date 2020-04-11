// Pages
import Home from '../pages/Home/Home';
import Women from '../pages/Women/Women';
import Main from '../pages/Main/Main';

const routes = [
    {
        path: "/",
        component: Main,
        exact: false,
        routes: [
            {
                path: "/",
                component: Home,
                exact: true
            },
            {
                path: "/women",
                component: Women,
                exact: true
            }
        ]
    }
]

export default routes;