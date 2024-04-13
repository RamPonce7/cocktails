import { lazy, Suspense } from 'react';
import { HeaderComponent, LoaderComponent } from '../shared';



export const HomeMainPage = () => {
    const Page = lazy(() => import('./home/home.page'))
    return (
        <Suspense fallback={<LoaderComponent />}>
            <HeaderComponent />
            <Page />
        </Suspense>
    );
}

export const SearchMainPage = () => {
    const Page = lazy(() => import('./search/search.page'))

    return (
        <Suspense fallback={<LoaderComponent />}>
            <HeaderComponent />
            <Page />
        </Suspense>
    );
}