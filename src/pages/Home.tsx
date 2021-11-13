import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const _navigate = useNavigate();

  const navigate = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('prevented');
    _navigate('/about');
  };

  React.useEffect(() => {
    console.log('rendered home');
  }, []);

  return (
    <>
      <Link to="/about">About</Link>
      <p>Home</p>
    </>
  );
};

export default Home;
