import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import IdCard from './IdCard';
import Random from './Random';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    <IdCard
      lastName='Doe'
      firstName='Jane'
      gender='female'
      height={169}
      birth={new Date("1998-08-13")}
      picture="https://randomuser.me/api/portraits/women/22.jpg"
    />
    <Random min={1} max={6}/>
  <Random min={1} max={100}/>
  </React.StrictMode>
);
