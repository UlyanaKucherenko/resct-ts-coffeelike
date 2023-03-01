import styled from 'styled-components';

import { device } from 'utils/device';
import { Flex } from 'components/App/GlobalStyled';

const Wrap = styled.div`
  ${Flex};
  height: 100%;
  column-gap: 40px;
  margin: -16px;

  @media (${device.md}) {
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    row-gap: 30px;
  }
`;

const Img = styled.img`
  width: 100%;
  max-width: 342px;

  @media (${device.lg}) {
    max-width: 300px;
  }
  @media (${device.md}) {
    max-width: 240px;
  }
`;

const Text = styled.div`
  @media (${device.md}) {
    padding: 0 16px;
  }
`;

const Error = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  color: ${({ theme }) => theme.tuftsBlue};
  margin-bottom: 16px;
`;

const Heading = styled.div`
  font-weight: 600;
  font-size: 36px;
  line-height: 42px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const Paragraph = styled.div`
  max-width: 305px;
  letter-spacing: 0.03em;
`;

export { Wrap, Img, Text, Error, Heading, Paragraph };
