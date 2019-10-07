import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter} from 'react-router-dom';

const rootElement = document.getElementById('root');
ReactDOM.render(
<BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>    
</BrowserRouter>, rootElement); 

