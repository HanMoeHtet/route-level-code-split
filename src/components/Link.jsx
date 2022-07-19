import {
  createPath,
  Link as RRDLink,
  useLocation,
  useResolvedPath,
} from 'react-router-dom';
import React from 'react';
import * as pageService from '../services/page.service';
import { useLinkClickHandler } from 'react-router-dom';

const Link = React.forwardRef(
  ({ replace, state, target, to, children, ...rest }, ref) => {
    const [, startTransition] = React.useTransition();
    let location = useLocation();
    let internalOnClick = useLinkClickHandler(to, { replace, state, target });
    let path = useResolvedPath(to);

    function handleClick(e) {
      e.preventDefault();
      if (createPath(location) !== createPath(path)) {
        pageService.startLoading();
      }
      startTransition(() => internalOnClick(e));
    }

    return (
      <RRDLink
        onClick={handleClick}
        ref={ref}
        to={to}
        replace={replace}
        state={state}
        target={target}
        {...rest}
      >
        {children}
      </RRDLink>
    );
  }
);

export default Link;
