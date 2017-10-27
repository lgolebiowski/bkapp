import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import { CreateStore, ApplyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'react-thunk';

// const store = createStore(
// 		rootReducer,
// 		applyMiddleware(thunk)
// );


ReactDOM.render(
	<BrowserRouter>
	<App />
	</BrowserRouter>,
	 document.getElementById('root')
	 );
registerServiceWorker();
