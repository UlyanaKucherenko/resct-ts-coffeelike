import { ReactNode } from 'react';

import { AppIsCrashed } from 'components/AppIsCrashed';
import { RLoadingOverlay } from 'components/RLoadingOverlay';

interface AppIsReadyProps {
  children: ReactNode;
}

export function AppIsReady({ children }: AppIsReadyProps) {
  // TODO: add conditions
  const isAppReady = true;
  const isAppFail = false;

  if (!isAppReady) {
    return isAppFail ? <AppIsCrashed /> : <RLoadingOverlay isVisible />;
  }

  return <>{children}</>;
}
