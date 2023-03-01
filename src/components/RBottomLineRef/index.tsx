import { RefObject } from 'react';

import { Line } from './styled';

interface RBottomLineRefProps {
  parentRef: RefObject<any>;
}

export function RBottomLineRef({ parentRef }: RBottomLineRefProps) {
  return <Line ref={parentRef} />;
}
