import React, { Suspense } from 'react';
import Header from '../../molecules/Header';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import pages from '../../../config/pages';

const AppComponent = () => {
    return (
        <Router>
            <Header />
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        {pages.map(({ slug, Component, exact }) => (
                            <Route key={slug} path={slug} exact={exact}>
                                <Component />
                            </Route>
                        ))}
                        <Route path='/' exact>
                            <Redirect to='/' />
                        </Route>
                        <Route path='*' exact>
                            🚨 404 - page not found
                        </Route>
                    </Switch>
                </Suspense>
            </main>
        </Router>
    );
};

export default AppComponent;
