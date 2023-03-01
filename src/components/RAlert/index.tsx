import { DefaultProps } from 'types/common';
import { Alert } from './styled';

function RAlert({ children, css }: DefaultProps<HTMLDivElement>) {
  return <Alert alertCss={css}>{children}</Alert>;
}

export { RAlert };
