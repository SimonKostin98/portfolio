import { createContext, useContext } from 'react';

export interface FullPageContextType {
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
  scrollToSlide: (index: number) => void;
  registerScrollToSlide: (fn: (index: number) => void) => void;
}

export const FullPageContext = createContext<FullPageContextType | null>(null);

export const useFullPage = () => {
  const context = useContext(FullPageContext);
  if (!context) {
    throw new Error('useFullPage must be used within FullPageProvider');
  }
  return context;
};
