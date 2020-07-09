import React from 'react';

import './content.scss';
import MediaLinksList from './media-links-list/media-links-list';

function Content() {
  const authorName: string = 'Dmitry Pischalka';
  const description: string = 'Senior Front-End Developer, geek, blogger.';
  const temporaryNotification: string = 'Coming soon for blog, additional info, other...';

  return (
    <main className="content-part">
      <h1 className="is-size-1 content-part-title has-text-centered">{authorName}</h1>

      <div className="content-description has-text-centered">{description}</div>
      <div className="content-temporary-notification has-text-centered">{temporaryNotification}</div>
      <MediaLinksList/>
    </main>
  );
}

export default Content;
