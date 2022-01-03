import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store';

// core styles
import "./scss/volt.scss";

// vendor styles
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";

import App from "./pages/App";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
