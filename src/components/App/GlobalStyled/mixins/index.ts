import { css } from 'styled-components';

const Block = ({
  w = 'auto',
  h = 'auto',
  p = 0,
  m = 0,
  b = 'none',
  bg = 'transparent',
}) => css`
  width: ${w};
  height: ${h};
  padding: ${p};
  margin: ${m};
  border: ${b};
  background: ${bg};
`;

const Flex = ({ align = 'center', justify = 'flex-start' }) => css`
  display: flex;
  align-items: ${align};
  justify-content: ${justify};
`;

const TextEllipsis = ({ width }: { width: string }) => css`
  width: ${width};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TextEllipsisForLines = ({ linesNumber = 4 }) => css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${linesNumber};
  -webkit-box-orient: vertical;
`;

const Circle = ({ size = '21px' }) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${size};
  height: ${size};
  border: 1px solid transparent;
  border-radius: 20px;
  margin: 0 1px;
  padding: 0 8px;
  line-height: 1;
  outline: 0;
  cursor: pointer;
`;

export { Block, Flex, TextEllipsis, TextEllipsisForLines, Circle };
