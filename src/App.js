import React, { useEffect } from 'react';
import Dashboard from './components/Dashboard';
import smoothscroll from 'smoothscroll-polyfill';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <Dashboard />
  );
}

export default App;
