import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from './context/plants';
import { NavigationProvider } from './context/navigation';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
<NavigationProvider>
    <Provider>
        {/* Everything inside will be passed the value */}
        <App />
    </Provider>
</NavigationProvider>

);