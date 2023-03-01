import { createPortal } from 'react-dom';
import { ReactNode } from 'react';

interface RModalPortalProps {
  children: ReactNode;
}

function RModalPortal({ children }: RModalPortalProps) {
  return createPortal(
    children,
    document.getElementById('modal-portal') as HTMLElement
  );
}

export { RModalPortal };
