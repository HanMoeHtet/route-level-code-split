import * as React from 'react';
import { Page } from '../pages';

export interface LocationContextType {
  pathname: string;
}

export const LocationContext = React.createContext<LocationContextType>({
  pathname: '',
});

type NavigateFunction = () => void;

export interface NavigationContextType {
  navigate: NavigateFunction;
}

export const NavigationContext = React.createContext<NavigationContextType>({
  navigate: () => {},
});

interface PageProviderProps {
  pages: Page[];
}

export const PageProvider: React.FC<PageProviderProps> = ({
  pages,
  children,
}) => {
  const [location, setLocation] = React.useState<LocationContextType>({
    pathname: '',
  });

  const navigate: NavigateFunction = () => {};

  return (
    <LocationContext.Provider value={location}>
      <NavigationContext.Provider value={{ navigate }}>
        <CurrentPage pages={pages} />
      </NavigationContext.Provider>
    </LocationContext.Provider>
  );
};

interface CurrentPageProps {
  pages: Page[];
}

export const CurrentPage: React.FC<CurrentPageProps> = ({ pages }) => {
  const [currentPage, setCurrentPage] =
    React.useState<React.ReactElement | null>(null);

  const { pathname } = React.useContext(LocationContext);

  React.useEffect(() => {
    (async () => {
      const page = pages.find((page) => page.path === pathname);

      if (page === undefined) {
        console.error(`Page not found: ${pathname}`);
      } else {
        if (page.isLazy) {
          const { default: NewPage } = await page.loadComponent();
          setCurrentPage(<NewPage />);
        } else {
          const NewPage = page.Component;
          setCurrentPage(<NewPage />);
        }
      }
    })();
  }, [pages]);

  return currentPage;
};
