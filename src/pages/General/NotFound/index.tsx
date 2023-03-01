import PageNotFound from 'assets/img/global/img/bg-page-not-found.png';
import { Wrap, Img, Text, Error, Heading, Paragraph } from './styled';

function NotFoundPage() {
  return (
    <Wrap>
      <Img
        src={PageNotFound}
        alt="Logo"
      />
      <Text>
        <Error>Error 404</Error>
        <Heading>This page does not exist ;(</Heading>
        <Paragraph>
          Sorry, this page does not exist. Check the spelling of the address, go
          to the main page or use the search
        </Paragraph>
      </Text>
    </Wrap>
  );
}

export default NotFoundPage;
