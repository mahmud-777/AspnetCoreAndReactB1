import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import PersonApp from './PersonApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PersonApp />, document.getElementById('root'));
registerServiceWorker();
