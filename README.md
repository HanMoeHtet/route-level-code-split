# Route level code splitting without screen flickering

1. Concurrent mode has been added in React v18. And it makes it very easy to avoid screen flickering unlike in v17. (You can see it in main branch.)
2. We will create a `Page` component to wrap all the pages. It will stop loading when the page is mounted and it will start loading when the page is unmounted.
```javascript
React.useEffect(() => {
    pageService.stopLoading();

    return () => {
        pageService.startLoading();
    };
}, []);
``` 
3. But this is not enough, because let's say Page A is currently mounted, React is preparing to render Page B. Page A will not be un-mounted until Page B is ready. So the cleanup function of `useEffect` is called just before Page B is rendered which is not what we want. We want to show loading indicators when Page B is loading (when the link is clicked, or when `navigate` is called.)

4. Sadly, we cannot easily integrate it with `react-router-dom` yet. We need to override the `Link` component. as in [src/components/Link.jsx](src/components/Link.jsx). 

 