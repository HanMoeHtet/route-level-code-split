import nProgress from 'nprogress';

nProgress.configure({
  showSpinner: false,
});

export const startLoading = () => {
  nProgress.start();
};

export const endLoading = () => {
  nProgress.done();
};
