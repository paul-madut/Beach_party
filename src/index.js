<<<<<<< HEAD
import { react } from '@babel/types';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './Redux/Store'
import { Provider } from 'react-redux'
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
>>>>>>> 7164b9199a262599153962c83704ebac05dd7c3d


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
    <Provider store={store}>
        <App />
    </Provider>
=======
    <App />
>>>>>>> 7164b9199a262599153962c83704ebac05dd7c3d
);

