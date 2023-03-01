import { useState } from 'react';
import { CSSObject, CSSProp } from 'styled-components';

import PlaceholderIconSrc from 'assets/img/global/img/icon-placeholder.png';
import { Image } from './styled';

interface RImgProps {
  src: string;
  css?: CSSProp | CSSObject;
}

export function RImg({ src, css }: RImgProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const onLoading = () => {
    setLoaded(true);
  };

  const onError = () => {
    setError(true);
  };

  return (
    <Image
      alt="Icon"
      css={css}
      src={!error && loaded ? src : PlaceholderIconSrc}
      onLoad={onLoading}
      onError={onError}
    />
  );
}
