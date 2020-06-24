import React from 'react';

import './content.scss';

function Content() {
  const authorName: string = 'Dmitry Pischalka';

  return (
    <div className="content-part">
      <h1 className="is-size-1 has-text-centered">{authorName}</h1>
    </div>
  );
}

export default Content;
