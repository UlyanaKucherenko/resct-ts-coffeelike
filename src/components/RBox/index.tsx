import { DefaultProps } from 'types/common';
import { Box } from './styled';

export function RBox({ css, children }: DefaultProps<HTMLDivElement>) {
  return <Box css={css}>{children}</Box>;
}
