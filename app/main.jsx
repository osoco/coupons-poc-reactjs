import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';

const mountNode = document.getElementById('app');

render(<App />, mountNode);