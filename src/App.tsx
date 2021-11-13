import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = React.lazy(
  () => import(/* webpackChunkName: "Home" */ './pages/Home')
);

const About = React.lazy(
  () => import(/* webpackChunkName: "About" */ './pages/About')
);

const home = <Home />;
const about = <About />;

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <React.Suspense fallback={about}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={home}></Route>
          <Route path="/about" element={about}></Route>
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default App;
