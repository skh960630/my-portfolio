import React, { useEffect } from 'react';
import Dashboard from './components/Dashboard';
import smoothscroll from 'smoothscroll-polyfill';

function App() {

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <Dashboard />
  );
}

export default App;
