import { ReactNode, useCallback, useState } from 'react';

import { FullPageContext } from './fullPage.context';

interface FullPageProviderProps {
  children: ReactNode;
}

export const FullPageProvider = ({ children }: FullPageProviderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollFn, setScrollFn] = useState<((index: number) => void) | null>(
    null,
  );

  const registerScrollToSlide = useCallback((fn: (index: number) => void) => {
    setScrollFn(() => fn);
  }, []);

  const scrollToSlide = useCallback(
    (index: number) => {
      scrollFn?.(index);
    },
    [scrollFn],
  );

  return (
    <FullPageContext.Provider
      value={{
        currentSlide,
        setCurrentSlide,
        scrollToSlide,
        registerScrollToSlide,
      }}
    >
      {children}
    </FullPageContext.Provider>
  );
};
