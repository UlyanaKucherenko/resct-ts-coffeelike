import { CSSObject, CSSProp } from 'styled-components';

import { RButtonIcon } from 'components/Form/RButtonIcon';
import { ReactNode } from 'react';
import { Popup, Header, Title, Close } from './styled';

interface RPopupProps {
  width?: number;
  fullHeight?: boolean;
  maxHeight?: number;
  popupTitle?: string;
  titleCss?: CSSProp | CSSObject;
  popupCss?: CSSProp | CSSObject;
  children: ReactNode;
  onClose: () => void;
}

function RPopup({
  width = 420,
  fullHeight,
  maxHeight,
  onClose,
  popupTitle,
  titleCss,
  popupCss,
  children,
  ...rest
}: RPopupProps) {
  return (
    <Popup {...{ width, fullHeight, maxHeight, popupTitle, popupCss, ...rest }}>
      <Header>
        {popupTitle ? <Title css={titleCss}>{popupTitle}</Title> : null}
        <Close>
          {onClose ? (
            <RButtonIcon
              color="#889097"
              onClick={onClose}
            >
              ✖
            </RButtonIcon>
          ) : null}
        </Close>
      </Header>
      {children}
    </Popup>
  );
}

export { RPopup };
