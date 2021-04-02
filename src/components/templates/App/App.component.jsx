import React, { Suspense } from 'react';
import Header from '../../organisms/Header';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import pages from '../../../config/pages';
import * as styles from './app.styles.module.css';

const AppComponent = () => {
    return (
        <Router>
            <Header />
            <main className={styles.main}>
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
            <footer className={styles.footer}>
                Si quieres descargarte el repositorio{' '}
                <a href='https://github.com/MaxiGarcia13/seeker' target='__blank'>
                    haz click aqui 🚚
                </a>
            </footer>
        </Router>
    );
};

export default AppComponent;
