import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import {
  getAuth
}from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDu51hlhys3g0lp8JIDdkwXYACZq1k-4Kk",
  authDomain: "agrihub-cfc17.firebaseapp.com",
  projectId: "agrihub-cfc17",
  storageBucket: "agrihub-cfc17.appspot.com",
  messagingSenderId: "605934285102",
  appId: "1:605934285102:web:56c2081e66dc699b714abf",
  measurementId: "G-54QPNE8246"
};
initializeApp(firebaseConfig);  
const auth = getAuth();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

