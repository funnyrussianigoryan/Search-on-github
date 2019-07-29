import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './Components/Header/Header';
import Result from './Components/Results/Result';

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './Reducers/reducers'
import watchFetchDog from './Sagas/Sagas'

//creating middleware
const sagaMiddleware = createSagaMiddleware();

//creating store with middleware
const store = createStore(  
  reducer,
  applyMiddleware(sagaMiddleware)
);

//running saga 
sagaMiddleware.run(watchFetchDog);
  
const Main = () => (
    <>
        <Header />
        <Result />
    </>
)

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root')
)


