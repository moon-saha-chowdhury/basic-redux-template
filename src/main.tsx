import * as React from 'react';
import * as ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
// import App from './App'
import './index.css'
import routes from './routes';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={routes}/>

    </Provider>
    {/* <App /> */}
  </React.StrictMode>,
)
