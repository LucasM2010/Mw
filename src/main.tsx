import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoadingScreen from './components/loading';

ReactDOM.render(
  <React.StrictMode>
    <LoadingScreen /> {/* Inicialmente mostra a tela de carregamento */}
  </React.StrictMode>,
  document.getElementById('root')
);
