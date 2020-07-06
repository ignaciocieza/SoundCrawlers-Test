import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from '../widgets/error-boundary/ErrorBoundary';
import Spinner from '../widgets/with-spinner/Spinner';

const PublishedTrack = lazy(() => import('../pages/published-track/PublishedTrack'));

const Main = () => (
    <React.Fragment>
        <Switch>
            <ErrorBoundary>
                <Suspense fallback={<Spinner />}>
                    <Route exact path='/' component={PublishedTrack} />
                </Suspense>
            </ErrorBoundary>
        </Switch>
    </React.Fragment>
);

export default Main;