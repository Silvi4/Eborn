import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default function Main(props) {
    const { routes } = props;
    return (
        <main>
            <LoadRoutes routes={routes}/>
        </main>
    )
}

function LoadRoutes({routes}) {
    return (
        <Switch>
            {routes.map((route,index) => (
                <Route 
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </Switch>
    )
}