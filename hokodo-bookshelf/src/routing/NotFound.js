import React from 'react';
import { Link } from 'react-router-dom';

import links from '../routing/links';

export default () => {
  return (
    <div className="not-found">
      <h1>404 – Page Not Found</h1>
      <Link to={links.bookList.link} className="btn btn-back">
        Go Back To Listing
      </Link>
    </div>
  );
};
