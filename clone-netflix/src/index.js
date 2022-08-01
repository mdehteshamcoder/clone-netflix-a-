// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './app/store';
// import App from './App';
// import './index.css';


// // const container = document.getElementById('root');
// // const root = createRoot(container);

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
      
//     </Provider>
//   </React.StrictMode>
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

