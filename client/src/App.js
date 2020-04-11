import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './config/routes';
import MenuTop from './components/MenuTop/MenuTop';
import Footer from './components/Footer/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MenuTop/>
          <Switch>
            {routes.map((route, index) => (
              <RouteWithSubRoute key={index} {...route}/>
            ))}
          </Switch>
       <Footer />
    </Router>
    </Provider>
  );
}

function RouteWithSubRoute(route) {
  return (
    <Route 
      path={route.path}
      exact={route.exact}
      render={props => <route.component routes={route.routes} {...props}/>}
    />
  )
}

export default App;
