import * as React from 'react';
import { endLoading, startLoading } from '../services/nprogress';
import { usePage } from './usePage';

interface PageProps {}

const Page: React.FC<PageProps> = ({ children }) => {
  const { onLoad } = usePage();

  const render = React.useMemo(() => {
    return <>{children}</>;
  }, [children]);

  React.useEffect(() => {
    onLoad(render);
  }, [onLoad, render]);

  React.useEffect(() => {
    endLoading();
    return () => startLoading();
  }, []);

  return render;
};

export default Page;
