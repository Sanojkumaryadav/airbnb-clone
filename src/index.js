
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
// import * as ReactDOM from 'react-dom/client';
// import App from './App';
// import {BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
    {/* <ChakraProvider> */}
      <App />
    {/* </ChakraProvider> */}
  </React.StrictMode>
  </BrowserRouter>
);

serviceWorker.unregister();
reportWebVitals();