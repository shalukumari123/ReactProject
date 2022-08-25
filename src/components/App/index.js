import React, { useState, useEffect } from 'react';

import Login from '../Login';
import Dashboard from '../Dashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  // const [first, setfirst] = useState("shalu");//static value
  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <Dashboard setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
};

export default App;

//key name-is_authenticated