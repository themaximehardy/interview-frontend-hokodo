import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './routing/Routes';
import axios from 'axios';

import './styles/App.scss';
import { BooksContext } from './BooksContext';

const App = () => {
  const [data, setData] = useState({ books: [] });
  const providerValue = useMemo(() => data, [data]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://hokodo-frontend-interview.netlify.app/data.json',
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="app" data-test="component-app">
        <BooksContext.Provider value={providerValue}>
          <Route component={Routes} />
        </BooksContext.Provider>
      </div>
    </Router>
  );
};

export default App;
