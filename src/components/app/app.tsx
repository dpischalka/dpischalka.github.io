import React from 'react';

import './app.scss';
import Header from "../header/header/header";
import Content from "../content/conten";

function App() {
  return (
    <div className="container is-fluid app-component">
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
