import * as React from 'react';

interface PageContextType {
  page: React.ReactElement | null;
  updatePage: (page: React.ReactElement) => void;
}

export const PageContext = React.createContext<PageContextType>({
  page: null,
  updatePage: () => {},
});

interface PageProviderProps {}

const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
  const [page, setPage] = React.useState<React.ReactElement | null>(null);

  const updatePage = React.useCallback((newPage: React.ReactElement) => {
    setPage(newPage);
  }, []);

  return (
    <PageContext.Provider value={{ page, updatePage }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;
