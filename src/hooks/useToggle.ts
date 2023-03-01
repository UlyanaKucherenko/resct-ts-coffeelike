import { useCallback, useState } from 'react';

export const useToggle = (defaultValue = false): [boolean, () => void] => {
  const [toggle, setToggle] = useState(defaultValue);

  const onToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  return [toggle, onToggle];
};
