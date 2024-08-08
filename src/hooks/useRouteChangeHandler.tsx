// hooks/useRouteChangeHandler.ts

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const useRouteChangeHandler = (handler: () => void) => {
  const pathname = usePathname();

  useEffect(() => {
    handler();
  }, [pathname, handler]);
};

export default useRouteChangeHandler;
