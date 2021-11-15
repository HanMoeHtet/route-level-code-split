import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={null}>
              <Home />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <React.Suspense fallback={null}>
              <About />
            </React.Suspense>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
