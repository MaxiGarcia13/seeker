import { lazy } from 'react';

const PreviewComponent = lazy(() => import('../components/organisms/Preview'));
const ReduxComponent = lazy(() => import('../components/organisms/Redux'));
const SagaComponent = lazy(() => import('../components/organisms/Saga'));

export default [
    {
        label: ' Sobre el proyecto',
        slug: '/',
        Component: ReduxComponent,
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
        label: 'Preview',
        slug: '/preview',
        Component: PreviewComponent,
        exact: true,
    },
];
