import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import BookList from '../book-list/BookList';
import BookDetail from '../single-book/BookDetail';
import NotFoundPage from './NotFound';
import links from './links';

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route
          exact
          path={links.bookList.link}
          component={() => <BookList />}
        />
        <Route
          exact
          path={links.bookDetail.link(':id')}
          component={BookDetail}
        />
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </section>
  );
};

export default Routes;
