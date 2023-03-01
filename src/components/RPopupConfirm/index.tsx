import { ReactNode } from 'react';

import { RButtonIcon } from 'components/Form/RButtonIcon';
import { RButton } from 'components/Form/RButton';
import { RMask } from 'components/RMask';
import { RModalPortal } from 'components/RModalPortal';
import { RLoadingOverlay } from 'components/RLoadingOverlay';
import { Popup, Header, Title, Close, Body, Footer } from './styled';

interface RPopupConfirmProps {
  width?: number;
  fullHeight?: boolean;
  maxHeight?: number;
  confirmButtonText?: string;
  cancelButtonText?: string;
  isLoading?: boolean;
  onClose?: () => void;
  onConfirm: () => void;
  popupTitle?: string;
  children: ReactNode;
  buttonPosition: string;
}

export function RPopupConfirm({
  width = 420,
  fullHeight,
  maxHeight,
  confirmButtonText = 'Confirm',
  cancelButtonText = 'Cancel',
  isLoading = false,
  onClose = () => {},
  onConfirm = () => {},
  popupTitle,
  children,
  buttonPosition,
}: RPopupConfirmProps) {
  return (
    <RModalPortal>
      <RMask>
        <Popup {...{ width, fullHeight, maxHeight, popupTitle }}>
          <RLoadingOverlay isVisible={isLoading} />
          <Header>
            {popupTitle ? <Title>{popupTitle}</Title> : null}
            <Close>
              {onClose ? (
                <RButtonIcon
                  color="#C4C4C4"
                  onClick={onClose}
                >
                  ✖
                </RButtonIcon>
              ) : null}
            </Close>
          </Header>
          <Body>{children}</Body>
          <Footer buttonPosition={buttonPosition}>
            <RButton
              variant="text"
              onClick={onClose}
              fullWidth
            >
              {cancelButtonText}
            </RButton>
            <RButton
              onClick={onConfirm}
              fullWidth
            >
              {confirmButtonText}
            </RButton>
          </Footer>
        </Popup>
      </RMask>
    </RModalPortal>
  );
}
