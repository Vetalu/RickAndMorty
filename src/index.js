import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const defaultState = {
  information: [], 
  catchDiv: [],
  episode: 1,
  episodeName: "",
  modalInfo:[],
  active: false,
  heart: false,
}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "MAPING":
      return{...state, information: action.payload }
    case "MODAL_WIND":
      return{...state, modalInfo: action.payload }
    case "IDDIV":
      return{...state, catchDiv: action.payload }
    case "EPISODE":
      return{...state, episode: action.payload }
    case "EPISODE_NAME":
      return{...state, episodeName: action.payload }
    case "MODULE_BOOLEN":
      return{...state, active: action.payload }
    case "HEART":
      return{...state, heart: action.payload }
    default: 
      return state
  }
}
const store = createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);
