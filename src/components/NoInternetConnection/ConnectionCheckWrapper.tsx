'use client';
import React from 'react';
import { Detector } from 'react-detect-offline';

import NoInternetConnectionError from '@/components/NoInternetConnection/No InternetConnectionError';

const ConnectionCheckWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <Detector
        render={({ online }) => (
          <> {online ? <>{children}</> : <NoInternetConnectionError />}</>
        )}
      />
    </div>
  );
};

export default ConnectionCheckWrapper;
