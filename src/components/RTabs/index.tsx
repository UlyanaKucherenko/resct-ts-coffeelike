import { Tabs, Tab } from './styled';

interface RTabs {
  options: { slug: string; title: string }[];
  activeTab: string;
  minWidth?: string;
  fullWidth?: boolean;
  withBorder?: boolean;
  setTab?: (slug: string) => void;
}

export function RTabs({
  options,
  activeTab,
  minWidth,
  fullWidth = false,
  withBorder = true,
  setTab = () => {},
}: RTabs) {
  const renderTabs = () => {
    return options.map((tab) => {
      return (
        <Tab
          key={tab.slug}
          as="button"
          type="button"
          active={tab.slug === activeTab}
          onClick={() => setTab(tab.slug)}
          fullWidth={fullWidth}
          minWidth={minWidth}
          withBorder={withBorder}
        >
          {tab.title}
        </Tab>
      );
    });
  };

  return <Tabs fullWidth={fullWidth}>{renderTabs()}</Tabs>;
}
