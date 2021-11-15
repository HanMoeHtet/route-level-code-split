import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FabllbackProvider } from './composables/FabllbackProvider';
import { ModalProvider } from './composables/ModalProvider';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <FabllbackProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </FabllbackProvider>
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
