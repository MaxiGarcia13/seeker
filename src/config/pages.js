import { lazy } from 'react';

const DemoComponent = lazy(() => import('../components/pages/Demo'));
const ReduxComponent = lazy(() => import('../components/pages/Redux'));
const AboutProyectComponent = lazy(() => import('../components/pages/AboutProyect'));
const SagaComponent = lazy(() => import('../components/pages/Saga'));

export default [
    {
        label: ' Sobre el proyecto',
        slug: '/',
        Component: AboutProyectComponent,
        exact: true,
    },
    {
        label: 'Que es Redux?',
        slug: '/redux',
        Component: ReduxComponent,
        exact: true,
    },
    {
        label: 'Que es Saga?',
        slug: '/saga',
        Component: SagaComponent,
        exact: true,
    },
    {
        label: 'Demo',
        slug: '/demo',
        Component: DemoComponent,
        exact: true,
    },
];
