import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './App';
import { toHaveAccessibleName } from '@testing-library/jest-dom/dist/matchers';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);
