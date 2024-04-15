import { Link, useLocation } from 'react-router-dom';
import homeIcon from '../images/icons/home-icon.svg';
import arrowIconDisable from '../images/icons/arrow-icon-disable.svg';
import React from 'react';

export const Breadcrumbs = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex items-center gap-2">
      <Link to="/">
        <img src={homeIcon} alt="Home Icon" />
      </Link>

      {pathname
        .split('/')
        .slice(1, -1)
        .map(path => (
          <React.Fragment key={path}>
            <img
              src={arrowIconDisable}
              alt="Arrow Disable"
              className="rotate-90"
            />
            <Link to={`/${path}`} className="flex">
              <small className="first-letter:uppercase">{path}</small>
            </Link>
          </React.Fragment>
        ))}

      <img src={arrowIconDisable} alt="Arrow Disable" className="rotate-90" />

      <small className="text-secondary first-letter:uppercase">
        {pathname.split('/').slice(-1).join('').replaceAll('-', ' ')}
      </small>
    </div>
  );
};