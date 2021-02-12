import { lazy } from 'react';

const DemoComponent = lazy(() => import('../components/organisms/Demo'));
const ReduxComponent = lazy(() => import('../components/organisms/Redux'));
const AboutProyectComponent = lazy(() => import('../components/organisms/AboutProyect'));

const SagaComponent = lazy(() => import('../components/organisms/Saga'));

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
