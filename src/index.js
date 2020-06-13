import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { formatPage, formatImagesToSquareContainer } from './ui_util';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

formatImagesToSquareContainer();
setTimeout(() => {
  formatPage();
}, 200);
window.addEventListener('resize', e => formatPage())

serviceWorker.unregister();
