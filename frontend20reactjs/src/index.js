import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.reder(
  <React.StrictMode>
    <App texto={{chamada:'Danki',chamada2:'Code'}}/>    
  </React.StrictMode>,
   document.getElementById('root')
);

