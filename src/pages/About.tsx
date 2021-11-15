import * as React from 'react';
import { Link } from 'react-router-dom';
import { ModalContext } from '../composables/ModalProvider';
import Page from '../composables/Page';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const { isOpen, updateIsOpen } = React.useContext(ModalContext);

  const toggleModal = React.useCallback(() => {
    updateIsOpen(!isOpen);
  }, [isOpen, updateIsOpen]);

  return (
    <Page>
      <div>
        <Link to="/">Home</Link> <Link to="/contact">Contact</Link>
        <h1>About</h1>
        <button
          onClick={() => {
            toggleModal();
          }}
        >
          Toggle Modal
        </button>
      </div>
    </Page>
  );
};

export default About;
