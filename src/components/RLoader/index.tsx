import { ReactComponent as AppLogoSvg } from 'assets/img/global/logo/app-logo-small.svg';
import { Loader } from './styled';

function RLoader() {
  return (
    <Loader>
      <AppLogoSvg />
    </Loader>
  );
}

export { RLoader };
