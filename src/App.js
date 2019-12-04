import React from 'react';
import RounterIndex from "../src/router";
import MainHeader from "./view/main-header";
import MainFooter from "./view/main-footer";
import './index.css'
function App() {
  return (
    <div className="wrap">
       <MainHeader />
       <main className="main">
                    <RounterIndex />
               </main>
      <MainFooter/>
    </div>
  );
}

export default App;
