import { DefaultProps } from 'types/common';
import { Wrap, Logo, Text } from './styled';

function AppLogo({ css }: DefaultProps<SVGAElement>) {
  return (
    <Wrap>
      <Logo css={css} />
      <Text css={css}>CoffeeLike</Text>
    </Wrap>
  );
}

export { AppLogo };
