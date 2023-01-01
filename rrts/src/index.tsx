import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { App } from './components/App';
import { reducers } from './reducers';


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = createStore(reducers, applyMiddleware(thunk));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
