import React, { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./Lazyloading'));

const Applazyloading = () => {
  return (
    <div>
      <h1>This is my main component</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default Applazyloading;
