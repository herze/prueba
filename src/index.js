import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker';
import {loadProducts} from './actions/index';
const logger = store => next =>action=> {
    console.log(action)
    let result = next(action)
    console.log(store.getState())
    return result;
}

const store = createStore(reducer,applyMiddleware(logger,thunk));
store.dispatch(loadProducts());

ReactDOM.render(
    <Provider store = {store}>
    <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
