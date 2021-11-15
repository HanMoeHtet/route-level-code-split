
# Route level code splitting without flickering

[Go to Demo](https://route-level-code-splitting.netlify.app/)  

Many people had mentioned how to use route level code splitting for performance. In React, you can use it with React.lazy and React.Suspense. The main drawback of this approach is that the fallback prop of the Suepense can only be written something like

  

    <div>Loading...</div>

  

which should't exist in your million-dollar app  😏. You might have also seen some flickering issues which happen when page one is unmounted, fallback is shown and then page two is mounted, where all of these are happening relatively fast.

  

On the other hand, many sites like Facebook, Instragram and Youbute try to keep the previous page until the next page is downloaded and ready to be mounted, when navigating.

  

I've tried many different approaches. You can see them in this repo's branches. The only one that have worked out for me is to update the fallback after a page is rendered(mounted) and to memorize the routes that are rendered.

  

The idea here is that we must keep fallback as a state and update it when a page is renderd. But if we do so, there will be an infinite rendering because the page itself is a child of Suspense. When parent state changes, all children will be re-rendered,again updating the fallback. Here's when useMemo come into play. We'll have to memoize all child routes that are rendered so that when fallback is updated they are not rendered again. And when a page is rendered, we'll update the fallback but how?

  

Again, we'll use useMemo to memoize the component(page) and render `the memoized` and update the fallback with `the memoized` so that they will be in sync. Both have to be a single instance because the page can also have popups and form states and when navigating,  those popups and form states must remain in fallback.

The above approach is not well tested though. I have only tested a fake modal. And if you have to include very complex UI components (like popovers and portals) , I wouldn't garuantee this works. Feel free to open an issue then.
