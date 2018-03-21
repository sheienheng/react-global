import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './static/css/font-awesome.css'
import './static/css/globle.css'
import { Provider} from 'react-redux'
import reducer from './store/reducer'
import { createStore } from 'redux'
let store = createStore(reducer)
ReactDOM.render(<Provider store={store}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
