import { lazy, Suspense } from 'react';
import { LoaderComponent } from '../shared';


export const HomeMainPage = () => {
    const Page = lazy(() => import('./home/home.page'))
    return (
        <Suspense fallback={<LoaderComponent />}>
            <Page />
        </Suspense>
    );
}