import { createGlobalStyle, css } from 'styled-components';

export const ComponentsGlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    .pag-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border: 1px solid transparent;
      border-radius: 50%;
      font-size: 13px;
      padding: 0 4px;
      line-height: 1;
      list-style: none;
      outline: 0;
      cursor: pointer;
      user-select: none;
    }

    .rc-pagination {
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0;
      font-size: 13px;

      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      ol {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      &::after {
        display: block;
        clear: both;
        height: 0;
        overflow: hidden;
        visibility: hidden;
        content: ' ';
      }
    }

    .rc-pagination-total-text {
      display: inline-block;
      height: 28px;
      margin-right: 8px;
      line-height: 26px;
      vertical-align: middle;
    }

    .rc-pagination-item {
      @extend .pag-item;
      margin: 0 4px;

      &:hover {
        background-color: #ccc;
        border-color: #ccc;
        transition: all 0.3s;
      }
    }

    .rc-pagination-item-active {
      background-color: ${theme.antiFlashWhite};
      border-color: ${theme.antiFlashWhite};
    }

    .rc-pagination-jump-prev,
    .rc-pagination-jump-next {
      @extend .pag-item;

      button {
        background: transparent;
        border: none;
        cursor: pointer;
        color: #666;

        &:after {
          display: block;
          content: '•••';
        }
      }
    }

    .rc-pagination-prev,
    .rc-pagination-next {
      @extend .pag-item;
      width: 24px;
      height: 24px;
      margin: 0;
      padding: 0;
      border: none;

      svg {
        width: 100%;
        height: 100%;
      }

      .rc-pagination-item-link {
        display: block;
        font-size: 16px;
        outline: none;
        transition: all 0.3s;
      }

      &:focus {
        .rc-pagination-item-link {
          color: #1890ff;
          border-color: #1890ff;
        }
      }
    }

    .rc-pagination-prev {
      margin-right: 8px;
    }

    .rc-pagination-next {
      margin-left: 8px;
    }

    .rc-pagination-disabled {
      cursor: not-allowed;
      opacity: 0.3;

      &:hover {
        cursor: not-allowed;

        .rc-pagination-item-link {
          color: rgba(0, 0, 0, 0.25);
          border-color: ${theme.quillGrey};
          cursor: not-allowed;
        }
      }

      &:focus {
        cursor: not-allowed;

        .rc-pagination-item-link {
          color: rgba(0, 0, 0, 0.25);
          border-color: ${theme.quillGrey};
          cursor: not-allowed;
        }
      }

      .rc-pagination-item-link {
        color: rgba(0, 0, 0, 0.25);
        border-color: ${theme.quillGrey};
        cursor: not-allowed;
      }
    }

    .rc-pagination-slash {
      margin: 0 10px 0 5px;
    }

    .rc-pagination-options {
      display: inline-block;
      vertical-align: middle;
    }

    .rc-pagination-options-size-changer.rc-select {
      display: inline-block;
      width: auto;
      margin-right: 8px;
    }

    .rc-pagination-options-quick-jumper {
      display: inline-block;
      height: 28px;
      line-height: 28px;
      vertical-align: top;

      input {
        width: 50px;
        margin: 0 8px;
      }
    }

    .rc-pagination-simple {
      .rc-pagination-prev {
        height: 24px;
        line-height: 24px;
        vertical-align: top;

        .rc-pagination-item-link {
          height: 24px;
          background-color: transparent;
          border: 0;

          &::after {
            height: 24px;
            line-height: 24px;
          }
        }
      }

      .rc-pagination-next {
        height: 24px;
        line-height: 24px;
        vertical-align: top;

        .rc-pagination-item-link {
          height: 24px;
          background-color: transparent;
          border: 0;

          &::after {
            height: 24px;
            line-height: 24px;
          }
        }
      }

      .rc-pagination-simple-pager {
        display: inline-block;
        height: 24px;
        margin-right: 8px;

        input {
          box-sizing: border-box;
          height: 100%;
          margin-right: 8px;
          padding: 0 6px;
          text-align: center;
          background-color: #fff;
          border: 1px solid #d9d9d9;
          border-radius: 2px;
          outline: none;
          transition: border-color 0.3s;

          &:hover {
            border-color: #1890ff;
          }
        }
      }
    }

    .rc-pagination.rc-pagination-disabled {
      cursor: not-allowed;

      .rc-pagination-item {
        background: #f5f5f5;
        border-color: ${theme.quillGrey};
        cursor: not-allowed;

        a {
          color: rgba(0, 0, 0, 0.25);
          background: transparent;
          border: none;
          cursor: not-allowed;
        }
      }

      .rc-pagination-item-active {
        background: #dbdbdb;
        border-color: transparent;

        a {
          color: #fff;
        }
      }

      .rc-pagination-item-link {
        color: rgba(0, 0, 0, 0.25);
        background: #f5f5f5;
        border-color: ${theme.quillGrey};
        cursor: not-allowed;
      }

      .rc-pagination-item-link-icon {
        opacity: 0;
      }

      .rc-pagination-item-ellipsis {
        opacity: 1;
      }
    }

    @media all and (-ms-high-contrast: none) {
      .rc-pagination-options {
        * {
          &::-ms-backdrop {
            vertical-align: top;
          }
        }

        vertical-align: top;
      }
    }

    @media only screen and (max-width: 992px) {
      .rc-pagination-item-after-jump-prev {
        display: none;
      }
      .rc-pagination-item-before-jump-next {
        display: none;
      }
    }

    @media only screen and (max-width: 576px) {
      .rc-pagination-options {
        display: none;
      }
    }
  `}
`;
