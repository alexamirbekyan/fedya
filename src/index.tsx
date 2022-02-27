import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Routes, Route, HashRouter} from "react-router-dom";

import Privacy from "./Privacy";
import DataDeletionInstruction from "./DataDeletionInstruction";

const getRoutePrefix = (): string => {
  return process.env.NODE_ENV === 'production' ? '/fedya' : '/';
}

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path={getRoutePrefix()} element={<App />} />
        <Route path={`${getRoutePrefix()}/privacy`} element={<Privacy />} />
        <Route path={`${getRoutePrefix()}/ddi`} element={<DataDeletionInstruction />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
