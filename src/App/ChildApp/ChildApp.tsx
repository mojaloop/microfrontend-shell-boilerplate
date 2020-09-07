import React, { FC, Suspense } from 'react';

const ChildApp: FC<ChildAppWrapperProps> = React.lazy(() => import('app/App'));

interface ChildAppWrapperProps {
  token: string | null;
}

const ChildAppWrapper: FC<ChildAppWrapperProps> = ({ token }) => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <ChildApp token={token} />
    </Suspense>
  </div>
);

export default ChildAppWrapper;