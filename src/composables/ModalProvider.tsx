import * as React from 'react';

export interface ModalContextType {
  isOpen: boolean;
  updateIsOpen: (isOpen: boolean) => void;
}

export const ModalContext = React.createContext<ModalContextType>({
  isOpen: false,
  updateIsOpen: () => {},
});

interface ModalProviderProps {}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const updateIsOpen = React.useCallback((isOpen: boolean) => {
    console.log(isOpen);
    setIsOpen(() => isOpen);
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, updateIsOpen }}>
      {isOpen && <div>Fake Modal</div>}
      {children}
    </ModalContext.Provider>
  );
};
