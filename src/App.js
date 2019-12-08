import React from 'react';
import logo from './logo.svg';
import bulb from './assets/icon.png'
import sandwich from './assets/sandwich.png'
import './App.css';
import UserInput from './userInput';
function App() {
  return (
    <div>
      <header className="App bg-light-blue flex-ns sandwich-color">
        <div className="mw3"> 
          <img src={bulb} className="App-logo" alt="logo" />
        </div>
        <div className="pa3 center white fw9 f3 lh-title"> Tassel Loans </div>
        <div className="mw3"> <img src={sandwich} alt="logo" /> </div>
      </header>
      <div className="header-bg-color fw9 tc pa4">
        Going abroad to study ?
      </div>
      <p className="tc">
        Compare all your foreign education loans right here!
        Personalize your options to find the best loan for your needs.
      </p>
      <div className="tc pa2">
        Personalize your options
      </div> 
      <UserInput />
    </div>
  );
}
export default App;