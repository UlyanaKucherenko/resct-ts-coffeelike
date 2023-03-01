import { DefaultProps } from 'types/common';
import { Wrap } from './styled';

export function RListIsEmpty({ children }: DefaultProps<HTMLDivElement>) {
  return <Wrap>{children || 'List is empty'}</Wrap>;
}
