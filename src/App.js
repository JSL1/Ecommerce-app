import React from 'react';
import './App.css';
import Homepage from './Components/Homepage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteSwitch from './RouteSwitch';

function App() {
  return (
    <div className='App'>
        <RouteSwitch />
    </div>
  );
}

export default App;
