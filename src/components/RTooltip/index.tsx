import Tippy, { TippyProps } from '@tippyjs/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tippy.js/animations/shift-away-extreme.css';

import { ContentWrap } from './styled';

interface RTooltipProps extends TippyProps {
  tooltip: string;
  minWidth: string;
}

export function RTooltip({
  children,
  tooltip,
  placement = 'bottom-end',
  maxWidth,
  minWidth,
  offset = [12, 17],
  zIndex,
  interactive = true,
}: RTooltipProps) {
  return (
    <Tippy
      content={<ContentWrap css={{ minWidth }}>{tooltip}</ContentWrap>}
      appendTo={document.body}
      animation="shift-away-extreme"
      role="tooltip"
      placement={placement}
      maxWidth={maxWidth}
      offset={offset}
      zIndex={zIndex}
      interactive={interactive}
      hideOnClick={false}
    >
      {children}
    </Tippy>
  );
}
