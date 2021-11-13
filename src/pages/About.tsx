import * as React from 'react';
import { Link } from 'react-router-dom';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <p>About</p>
    </>
  );
};

export default Home;
