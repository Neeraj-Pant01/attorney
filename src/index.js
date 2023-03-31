import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./components/redux/store.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
  {/* <PersistGate loading={null} persistedStore={persistedStore}> */}
        <App />
      {/* </PersistGate> */}
  </Provider>
  </BrowserRouter>
)
