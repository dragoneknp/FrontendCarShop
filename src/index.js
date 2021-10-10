import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hero from './Component/hero/hero';
import "./style.scss";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from './store/rootReducer';
import "swiper/swiper-bundle.css";
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Hero />
  </Provider>
  ,
  document.getElementById('root')
);
