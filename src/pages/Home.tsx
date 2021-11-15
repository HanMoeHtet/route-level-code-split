import * as React from 'react';
import { Link } from 'react-router-dom';
import { ModalContext } from '../composables/ModalProvider';
import { usePage } from '../composables/usePage';
import { endLoading, startLoading } from '../services/nprogress';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const { onLoad } = usePage();
  const { isOpen, updateIsOpen } = React.useContext(ModalContext);

  const toggleModal = React.useCallback(() => {
    updateIsOpen(!isOpen);
  }, [isOpen, updateIsOpen]);

  const render = React.useMemo(() => {
    return (
      <div>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <h1>Home</h1>
        <button
          onClick={() => {
            toggleModal();
          }}
        >
          Toggle Modal
        </button>
      </div>
    );
  }, [toggleModal]);

  React.useEffect(() => {
    onLoad(render);
  }, [onLoad, render]);

  React.useEffect(() => {
    endLoading();
    return () => startLoading();
  }, []);

  return render;
};

export default Home;
