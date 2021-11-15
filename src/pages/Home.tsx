import * as React from 'react';
import { Link } from 'react-router-dom';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <Link to="/about">About</Link>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
