import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from './context/plants';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <Provider>
        {/* Everything inside will be passed the value */}
        <App />
    </Provider>
);