import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter, BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
    </React.StrictMode>,
    
  document.getElementById('root')
);


