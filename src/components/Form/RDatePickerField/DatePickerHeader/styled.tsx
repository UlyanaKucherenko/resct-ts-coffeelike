import styled, { css } from 'styled-components';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Month = styled.div`
  width: 72px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
`;

const BtnArrow = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `};
`;

const Select = styled.div`
  position: relative;
  width: 68px;
  height: 26px;
  padding: 4px 4px 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    background-color: #eaecf5;
  }
`;

const SelectField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 500;
`;

export { Wrap, Month, BtnArrow, Select, SelectField };
