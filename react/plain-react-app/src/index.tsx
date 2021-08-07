import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './css/global.css';
import reportWebVitals from './reportWebVitals';
import {AppProvider, AppContext} from './context/AppState';

ReactDOM.render(
  <React.Fragment>
    <AppProvider>
      <AppContext.Consumer>
        {(appState): React.ReactElement => {
          return <AppRouter {...appState} />
        }}
      </AppContext.Consumer>
    </AppProvider>
  </React.Fragment>,
  document.getElementById('root'),
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)