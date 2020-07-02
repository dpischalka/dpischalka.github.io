import React, { useState } from 'react';

import './media-links-list.scss';
import MediaLinkItem from "./media-link-item/media-link-item";
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

export interface MediaLinkItemProps {
  title: string;
  icon: IconProp;
  href?: string;
  iconSize?: SizeProp;
  className?: string;
}

function MediaLinksList() {
  const mediaLinksList: MediaLinkItemProps[] = [
    {title: 'dpischalka@gmail.com', icon: faEnvelope},
    {title: 'dpischalka', icon: faTwitter, href: 'https://twitter.com/dpischalka'},
    {title: 'dpischalka', icon: faGithub, href: 'https://github.com/dpischalka'},
    {title: 'dpischalka', icon: faLinkedinIn, href: 'https://www.linkedin.com/in/dpischalka/'},
  ];
  const [mediaItems] = useState<MediaLinkItemProps[]>(mediaLinksList);
  const mediaLinkItems = mediaItems
    .filter(({icon, title}: MediaLinkItemProps): boolean => Boolean(icon && title))
    .map((mediaLinkItemProps: MediaLinkItemProps, index: number) => {
      mediaLinkItemProps.className = `media-link-item-${index}`;

      return <MediaLinkItem key={index} {...mediaLinkItemProps}/>
    });

  return (
    <div className="media-links-container">{mediaLinkItems}</div>
  )
}

export default MediaLinksList;
