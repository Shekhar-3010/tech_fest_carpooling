import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from '@mui/material/styles';
import {themeOptions} from './Components/theme';
import {hop} from '@onehop/client';

hop.init({
  projectId: 'project_NzYwNjA2NzQwMzEzMzM0NTA',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themeOptions}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);


reportWebVitals();
//idr function call karna bhul gaye the 
