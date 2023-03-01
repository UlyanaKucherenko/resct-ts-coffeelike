import styled, { css } from 'styled-components';

import UploadIcon from 'assets/img/global/img/icon-upload-image.svg';

const FieldInput = styled.input`
  display: none;
`;

const Label = styled.label<{
  imgPreview?: string;
}>`
  position: relative;
  width: 100%;
  min-height: 200px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;

  cursor: pointer;
  ${({ imgPreview }) =>
    imgPreview
      ? css`
          background: center / cover url(${imgPreview}) no-repeat;
        `
      : css`
          background: center url(${UploadIcon}) no-repeat;
        `}
`;

const DocName = styled.div<{
  success: boolean;
  error: boolean;
}>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #e0e0e0;
  color: var(--base-font-color);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  padding-block: 3px;
  text-align: center;

  ${({ success }) =>
    success &&
    css`
      color: #fcfcfc;
      background-color: #48e18f;
    `}

  ${({ error }) =>
    error &&
    css`
      color: #fcfcfc;
      background-color: #fd7f7f;
    `}
`;

export { FieldInput, Label, DocName };
