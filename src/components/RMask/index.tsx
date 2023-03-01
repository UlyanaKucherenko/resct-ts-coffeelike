import { DefaultProps } from 'types/common';
import { Mask } from './styled';

interface RMaskProps extends DefaultProps<HTMLDivElement> {
  color?: string;
}

function RMask({
  color = 'rgba(221, 222, 225, 0.45)',
  onClick = () => {},
  children,
}: RMaskProps) {
  return (
    <Mask
      color={color}
      onClick={onClick}
    >
      {children}
    </Mask>
  );
}

export { RMask };
