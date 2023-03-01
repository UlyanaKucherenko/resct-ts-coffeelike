import { RImg } from 'components/RImg';
import { Main, Wrap, Image, Name } from 'components/RAvatar/styled';

interface RAvatar {
  size: number;
  thumb?: string;
  name?: string;
  onClick?: () => void;
}

export function RAvatar({
  size = 50,
  thumb,
  name = 'Avatar',
  onClick = () => {},
}: RAvatar) {
  let formattedName;
  if (!thumb) {
    const splitName = name.split(' ');
    formattedName =
      splitName.length > 1
        ? splitName[0].charAt(0) + splitName[1].charAt(0)
        : splitName[0].substr(0, 1);
  }

  const avatar = thumb ? (
    <Image>
      <RImg src={thumb} />
    </Image>
  ) : (
    <Name size={size}>{formattedName}</Name>
  );

  return (
    <Main onClick={onClick}>
      <Wrap size={size}>{avatar}</Wrap>
    </Main>
  );
}
