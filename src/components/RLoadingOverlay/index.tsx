import { RLoader } from 'components/RLoader';
import { ReactNode } from 'react';
import { Overlay } from './styled';

interface RLoadingOverlayProps {
  isVisible: boolean;
  children?: ReactNode;
  bgColor?: string;
}

export function RLoadingOverlay({
  isVisible,
  bgColor = 'rgba(255, 255, 255, 0.7)',
  children,
}: RLoadingOverlayProps) {
  return (
    <Overlay
      isVisible={isVisible}
      bgColor={bgColor}
    >
      {children || <RLoader />}
    </Overlay>
  );
}
