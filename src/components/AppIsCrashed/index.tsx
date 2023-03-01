import { useEffect } from 'react';

export function AppIsCrashed() {
  useEffect(() => {
    console.log('logout');
  }, []);

  return null;
}
