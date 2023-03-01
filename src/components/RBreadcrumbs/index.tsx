import { useCallback } from 'react';

import { ReactComponent as IconChevronSvg } from 'assets/img/global/breadcrumbs/icon-chevron.svg';
import { Breadcrumbs, BLink } from './styled';

interface IOption {
  id: number;
  route: string;
  title: string;
}

interface RBreadcrumbsProps {
  options: IOption[];
}

function RBreadcrumbs({ options }: RBreadcrumbsProps) {
  const renderBreadcrumbs = useCallback(() => {
    return options.map((link) => {
      return (
        <BLink
          key={link.id}
          to={link.route}
        >
          {link.title}
          <IconChevronSvg />
        </BLink>
      );
    });
  }, [options]);

  return <Breadcrumbs>{renderBreadcrumbs()}</Breadcrumbs>;
}

export { RBreadcrumbs };
