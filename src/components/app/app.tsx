import React from 'react';

import HomeLink from "../head/home-link/home-link";
import './app.scss';

function App() {
  const authorName: string = 'Dmitry Pischalka';

  return (
    <div className="container is-fluid app-component">
      <HomeLink/>
      <h1 className="is-size-1 has-text-centered">{authorName}</h1>
    </div>
  );
}

export default App;
