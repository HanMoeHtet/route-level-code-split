import * as React from 'react';
import { PageContext } from '../composables/PageProvider';

interface PageProps {
  importComponent: () => Promise<{ default: React.ComponentType }>;
}

const Page: React.FC<PageProps> = ({ importComponent }) => {
  const { page, updatePage } = React.useContext(PageContext);

  React.useEffect(() => {
    (async () => {
      const { default: NewComponent } = await importComponent();
      updatePage(<NewComponent />);
    })();
  }, [importComponent, updatePage]);

  console.log({ page });

  return page;
};

export default Page;
