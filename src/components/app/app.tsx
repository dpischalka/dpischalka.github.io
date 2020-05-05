import React from 'react';
import './app.scss';

function App() {
  const authorName: string = 'Dmitry Pischalka';

  return (
    <div className="container">
      <h1 className="is-size-1 has-text-centered">{authorName}</h1>
    </div>
  );
}

export default App;
