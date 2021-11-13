import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Page from './components/Page';
import PageProvider from './composables/PageProvider';

function App() {
  return (
    <BrowserRouter>
      <PageProvider>
        <Routes>
          <Route
            path="/"
            element={<Page importComponent={() => import('./pages/Home')} />}
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="/about"
            element={<Page importComponent={() => import('./pages/About')} />}
          ></Route>
        </Routes>
      </PageProvider>
    </BrowserRouter>
  );
}

export default App;
