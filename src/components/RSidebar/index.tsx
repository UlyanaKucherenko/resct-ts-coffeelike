import { useLocation } from 'react-router-dom';
import { ReactNode, useEffect, useRef } from 'react';

import { AppLogo } from 'components/AppLogo';
import { useMediaQuery } from 'react-responsive';
import { device } from 'utils/device';
import {
  Sidebar,
  Logo,
  Title,
  ItemWrap,
  ItemLink,
  ItemIcon,
  ItemText,
} from './styled';

interface ILink {
  title: string;
  route: string;
  icon: ReactNode;
}

interface RSidebarProps {
  links: ILink[];
  isOpened: boolean;
  onClose: () => void;
}

function RSidebar({ links, isOpened, onClose = () => {} }: RSidebarProps) {
  const location = useLocation();
  const prevLocation = useRef(location.pathname);
  const isTouchDevice = useMediaQuery({ query: `(${device.lg})` });

  useEffect(() => {
    if (isOpened && prevLocation.current !== location.pathname) {
      onClose();
      prevLocation.current = location.pathname;
    }
  }, [location.pathname]);

  const renderLinks = () => {
    return links.map((link) => {
      return (
        <ItemWrap key={link.route}>
          <ItemLink to={link.route}>
            <ItemIcon>{link.icon}</ItemIcon>
            <ItemText>{link.title}</ItemText>
          </ItemLink>
        </ItemWrap>
      );
    });
  };

  return (
    <Sidebar isOpened={isOpened}>
      <Logo>
        <AppLogo />
        {isTouchDevice && (
          <button
            type="button"
            onClick={onClose}
          >
            ---
          </button>
        )}
      </Logo>
      <Title>Menu</Title>
      {renderLinks()}
    </Sidebar>
  );
}

export default RSidebar;
