import nProgress from "nprogress";

nProgress.configure({
  showSpinner: true,
});

export const startLoading = () => {
  nProgress.start();
}

export const stopLoading = () => {
  nProgress.done();
}
