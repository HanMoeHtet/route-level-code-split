import React from 'react';
import * as pageService from '../services/page.service';
import Link from '../components/Link';

export const Page = ({ children }) => {
  React.useEffect(() => {
    pageService.stopLoading();

    return () => {
      pageService.startLoading();
    };
  }, []);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  );
};
