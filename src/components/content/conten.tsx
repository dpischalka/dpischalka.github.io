import React from 'react';

import './content.scss';

function Content() {
  const authorName: string = 'Dmitry Pischalka';
  const description: string = 'Senior Front-End Developer, geek, blogger.';

  return (
    <div className="content-part has-text-centered">
      <h1 className="is-size-1 content-part-title">{authorName}</h1>

      <span>{description}</span>
    </div>
  );
}

export default Content;
