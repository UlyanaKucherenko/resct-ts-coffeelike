import styled from 'styled-components';

const ContentWrap = styled.div`
  padding: 8px;
  color: ${({ theme }) => theme.policeBlue};
  font-size: 12px;
  line-height: 14px;
  background-color: ${({ theme }) => theme.blueChalk};
  box-shadow: 0 2px 4px 0 rgba(139, 143, 150, 0.25);
  border: 1px solid ${({ theme }) => theme.gainsboro};
  border-radius: 4px;
  letter-spacing: normal;

  ${({ css }) => css};
`;

export { ContentWrap };
