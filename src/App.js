import './App.css';
import React from 'react';
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButons";

function App() {
  return (
    //BEm class naming connection

    <div className="App">
      <Header/>
      <TinderCards/>
      <SwipeButtons/>
    </div>
  );
}

export default App;
