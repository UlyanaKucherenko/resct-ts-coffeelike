import { createGlobalStyle, css } from 'styled-components';

import { device } from 'utils/device';

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      &::-webkit-scrollbar {
        height: 4px;
        width: 4px;
      }

      &::-webkit-scrollbar-track {
        background: ${theme.white};
        border-radius: 4px;
      }

      &::-webkit-scrollbar-thumb {
        background: ${theme.osloGrey};
        border-radius: 4px;
      }
    }

    body {
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 145%;
      color: ${theme.maastrichtBlue};
      background-color: #fcfcfc;

      .Toastify__toast-container {
        top: 25px;
        right: 25px;
        width: 360px;
        word-break: break-word;

        .Toastify__toast {
          padding: 0;
          min-height: auto;
          background-color: ${theme.hintOfGreen};
          color: ${theme.maastrichtBlue};
          font-size: 12px;
          line-height: normal;
          font-family: var(--base-font-family);
          box-shadow: 0 4px 6px 1px rgba(74, 80, 87, 0.13);

          &--error {
            background-color: ${theme.error};
            color: ${theme.white};
          }

          &-body {
            padding: 13px 15px;
            margin: 0;
          }

          &-icon {
            width: 16px;
          }
        }

        @media only screen and (${device.sm}) {
          top: 0;
          right: 16px;
          left: 16px;
          width: auto;
        }
      }

      .react-tel-input {
        .country-list {
          padding: 6px 0;
          background-color: ${theme.white};
          border: 1px solid ${theme.gainsboro};
          box-shadow: 0 4px 6px 1px rgba(74, 80, 87, 0.13);
          border-radius: 6px;
          margin: 4px 0 4px -1px;

          &::-webkit-scrollbar {
            height: 4px;
            width: 4px;
          }

          &::-webkit-scrollbar-track {
            background: transparent;
            border-radius: 4px;
          }

          &::-webkit-scrollbar-thumb {
            background: ${theme.romanSilver};
            border-radius: 4px;
          }

          .country {
            &.highlight,
            &:hover {
              background-color: ${theme.honeydew};
            }
          }
        }
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: 'Roboto', sans-serif;
    }

    h1 {
      font-size: 42px;
      font-weight: 500;
      line-height: 130%;
      letter-spacing: -0.1px;
    }

    h2 {
      font-size: 24px;
      font-weight: 500;
      line-height: 140%;
      letter-spacing: 0;
    }

    h3 {
      font-size: 22px;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: 0.5px;
    }

    h4 {
      font-size: 20px;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: 0.5px;
    }

    h5 {
      font-size: 16px;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: 0.3px;
    }
  `}
`;
