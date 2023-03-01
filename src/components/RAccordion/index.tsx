import { useToggle } from 'hooks/useToggle';
import { DefaultProps } from 'types/common';
import { Container, Header, ChevronIcon, Body } from './styled';

interface RAccordionProps extends DefaultProps<HTMLDivElement> {
  mainTitle: string;
  maxHeight?: string;
}

export function RAccordion({
  mainTitle,
  maxHeight,
  children,
}: RAccordionProps) {
  const [isOpen, setIsOpen] = useToggle(false);

  return (
    <Container>
      <Header>
        {mainTitle}
        <ChevronIcon
          open={isOpen}
          onClick={setIsOpen}
        />
      </Header>
      <Body
        maxHeight={maxHeight || '200px'}
        marginTop="28px"
        hide={!isOpen}
      >
        {children}
      </Body>
    </Container>
  );
}
