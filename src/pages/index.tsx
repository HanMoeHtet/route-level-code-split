import * as React from 'react';
import Home from './Home';

export type ImportComponentFunction = () => Promise<{
  default: React.ComponentType;
}>;

export interface OrdinaryPage {
  isLazy?: false;
  Component: React.ComponentType;
}

export interface LazyLoadedPage {
  isLazy: true;
  loadComponent: () => Promise<{ default: React.ComponentType }>;
}

export type Page = (OrdinaryPage | LazyLoadedPage) & {
  name: string;
  path: string;
};

export const pages: Page[] = [
  {
    name: 'Home',
    path: '/',
    Component: Home,
  },
  {
    name: 'About',
    path: '/about',
    isLazy: true,
    loadComponent: () => import('./About'),
  },
];

console.log({ pages });
