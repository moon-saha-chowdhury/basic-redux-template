import * as React from 'react';
import * as ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
// import App from './App'
import './index.css'
import routes from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
