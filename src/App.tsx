import React from 'react';
import './App.css';
import Header from './sections/header';
import Main from './sections/main';
import Footer from './sections/footer';

function App() {
  return (
    <div className="relative">
      <Header />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
