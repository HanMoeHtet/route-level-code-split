import * as React from 'react';
import { Link } from 'react-router-dom';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>About</h1>
    </div>
  );
};

export default About;
