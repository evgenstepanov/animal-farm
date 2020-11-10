import { hot } from 'react-hot-loader/root';
import React from 'react';
import './App.scss';
import Footer from './Footer/Footer';
import Main from './Main/Main';

function App() {
  return (
    <div className='App-wrapper'>
      <Footer />
      <Main />
    </div>
  );
}

export default hot(App);
