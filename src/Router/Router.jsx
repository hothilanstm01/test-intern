import { BrowserRouter as Switch, Route } from 'react-router-dom';
import React from "react";
import Header from "../Components/Header/Header";
import pages from './Pages';

const renderRoutes = () => {
  return (
    <>
            <Switch>
                <Header />
                {pages.map((item) => {
                    return (
                        <Route
                            key={item.path}
                            path={item.path}
                            component={item.component}
                            exact={item.exact}
                        />
                    );
                })}
            </Switch>
        </>
  );
};

export default renderRoutes;
