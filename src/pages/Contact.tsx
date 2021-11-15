import * as React from 'react';
import { Link } from 'react-router-dom';
import { ModalContext } from '../composables/ModalProvider';
import Page from '../composables/Page';

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const { isOpen, updateIsOpen } = React.useContext(ModalContext);

  const toggleModal = React.useCallback(() => {
    updateIsOpen(!isOpen);
  }, [isOpen, updateIsOpen]);

  return (
    <Page>
      <div>
        <Link to="/">Home</Link> <Link to="/about">About</Link>
        <h1>Contact</h1>
        <button onClick={toggleModal}>Toggle Modal</button>
      </div>
    </Page>
  );
};

export default Contact;
