import React from 'react';
import AstroPic  from '../src/components/AstroPic';
import './App.css';

import { BrowserRouter } from 'react-router-dom'; 
require('dotenv').config()


export default function App() {
  return (
    <BrowserRouter>
      <div className="home">
        <AstroPic />
      </div>
    </BrowserRouter>
  );
}
