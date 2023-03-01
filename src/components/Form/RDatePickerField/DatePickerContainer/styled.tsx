import styled, { css } from 'styled-components';

import { device } from 'utils/device';

const Wrap = styled.div(
  ({ theme }) => css`
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    background-color: ${theme.white};
    border: 1px solid ${theme.gainsboro};
    border-radius: 16px;
    box-shadow: 0 4px 6px 1px rgba(74, 80, 87, 0.13);
    overflow: hidden;

    .react-datepicker {
      &__header {
        padding: 0;
        background-color: transparent;
        border: none;
      }

      &__month {
        margin: 0;

        &-container {
          padding: 20px;
        }
      }

      &__day {
        width: 34px;
        line-height: 34px;
        text-align: center;
        margin: 0;

        &-name {
          width: 34px;
          line-height: 34px;
          text-align: center;
          margin: 0;

          &:first-of-type,
          &:last-child {
            color: ${theme.error};
          }
        }

        &-names {
          margin: 0;
        }

        &:hover {
          color: ${theme.tuftsBlue};
          background-color: rgba(70, 148, 220, 0.3);
        }

        &--today {
          color: ${theme.tuftsBlue};
          font-weight: 600;
        }

        &--weekend {
          color: ${theme.error};
        }

        &--disabled,
        &--outside-month {
          color: ${theme.gainsboro};
        }

        &--selected,
        &--keyboard-selected {
          color: ${theme.white};
          background-color: ${theme.tuftsBlue};
          border-radius: 8px;
        }

        &--in-range,
        &--in-selecting-range {
          border-radius: 0;
          color: ${theme.tuftsBlue};
          background-color: rgba(70, 148, 220, 0.3);
        }

        &--range-start,
        &--selecting-range-start {
          border-radius: 8px 0 0 8px;
          color: ${theme.white};
          background-color: ${theme.tuftsBlue};
        }

        &--range-end,
        &--selecting-range-end {
          border-radius: 0 8px 8px 0;
          color: ${theme.white};
          background-color: ${theme.tuftsBlue};
        }
      }

      &__time {
        &-container {
          width: 141px;
          padding: 20px 0 20px 16px;
          border-color: ${theme.gainsboro};

          .react-datepicker__time-box {
            width: auto;
            text-align: start;
          }

          @media (${device.sm}) {
            width: 100%;
            border: none;
            border-top: 1px solid ${theme.gainsboro};
          }
        }

        &-list {
          max-height: 200px;

          &::-webkit-scrollbar {
            height: var(--scrollbar-width);
            width: var(--scrollbar-width);
          }

          &::-webkit-scrollbar-track {
            background: #ffffff;
            border-radius: var(--scrollbar-width);
          }

          &::-webkit-scrollbar-thumb {
            background: #889097;
            border-radius: var(--scrollbar-width);
          }

          &-item {
            display: inline-block;
            padding: 6px 36px 6px 8px !important;
            color: ${theme.maastrichtBlue};
            border-radius: 6px;

            &:not(:last-child) {
              margin-bottom: 6px;
            }

            &--selected {
              font-weight: 400 !important;
              background-color: ${theme.tuftsBlue} !important;

              &:hover {
                color: ${theme.tuftsBlue} !important;
                background-color: rgba(70, 148, 220, 0.3) !important;
              }
            }

            &--disabled {
              color: ${theme.gainsboro} !important;
              pointer-events: none;
            }

            &:hover {
              color: ${theme.tuftsBlue} !important;
              background-color: rgba(70, 148, 220, 0.3) !important;
            }

            @media (${device.sm}) {
              display: block;
              margin-right: 8px;
            }
          }
        }
      }

      &-time__header {
        margin-bottom: 10px;
        padding-left: 8px;
        line-height: 24px;
        font-weight: 500;
        color: ${theme.maastrichtBlue};
        font-size: 14px;
        text-align: start;
      }
    }

    @media (${device.sm}) {
      flex-direction: column;
    }
  `
);

export { Wrap };
