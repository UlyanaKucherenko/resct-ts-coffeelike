import { ReactNode, useCallback } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { unmountComponentAtNode, render } from 'react-dom';

import { RPopupPrompt } from 'components/RPopupPrompt';

interface RouterProps {
  children: ReactNode;
}

function Router({ children }: RouterProps) {
  const userConfirmation = useCallback(
    (message: string, callback: (answer: boolean) => void) => {
      const node = document.getElementById('modal-portal') as HTMLElement;

      const cleanUp = (answer: boolean) => {
        unmountComponentAtNode(node);
        callback(answer);
      };

      render(
        <RPopupPrompt
          message={message}
          cleanUp={cleanUp}
        />,
        node
      );
    },
    []
  );

  return (
    <BrowserRouter getUserConfirmation={userConfirmation}>
      {children}
    </BrowserRouter>
  );
}

export default Router;
