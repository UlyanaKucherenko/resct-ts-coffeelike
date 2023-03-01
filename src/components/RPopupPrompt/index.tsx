import { RMask } from 'components/RMask';
import { RPopup } from 'components/RPopup';
import { RButton } from 'components/Form/RButton';
import { Typography } from 'components/App/GlobalStyled';
import IconInfo from 'assets/img/global/alert/icon-info.svg';
import { Content, Img } from './styled';

interface RPopupPromptProps {
  message: string;
  cleanUp: (b: boolean) => void;
}

export function RPopupPrompt({ message, cleanUp }: RPopupPromptProps) {
  const { title, content } = JSON.parse(message) || {};

  const cancel = () => cleanUp(false);

  const ok = () => cleanUp(true);

  return (
    <RMask>
      <RPopup onClose={cancel}>
        <Content>
          <Img
            src={IconInfo}
            alt=""
          />
          <Typography
            fz="22px"
            fw={500}
            m="0 0 16px"
          >
            {title}
          </Typography>
          <Typography
            ta="center"
            m="0 0 48px"
          >
            {content}
          </Typography>
          <RButton
            fullWidth
            onClick={ok}
          >
            Leave Page
          </RButton>
        </Content>
      </RPopup>
    </RMask>
  );
}
