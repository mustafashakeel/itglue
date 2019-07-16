import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';

function render(Component) {
    ReactDOM.render(
        <Provider store={store}>
			<Component />
        </Provider>,
         document.getElementById('root'))
}
render(App)
