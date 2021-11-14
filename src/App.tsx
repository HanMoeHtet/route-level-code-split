import React from 'react';
import PageProvider from './composables/PageProvider';
import { pages } from './pages';
import Home from './pages/Home';

console.log({ pages });
function App() {
  return <PageProvider pages={pages} />;
}

export default App;
