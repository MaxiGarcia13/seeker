import React from 'react';
import ReactDom from 'react-dom';
import App from './components/organisms/App';
import './styles/global.css';
const root = document.getElementById('seeker_root');

ReactDom.render(<App />, root);
