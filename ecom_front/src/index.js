import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { Usercontext } from './pages/Usercontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Usercontext>
      {/* <CartProvider> */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
    {/* </CartProvider> */}
    </Usercontext>
  </React.StrictMode>
);
