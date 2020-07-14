import React, { useState } from 'react';
import { faGithub, faLinkedinIn, faTwitter, faMedium } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

import './media-links-list.scss';
import MediaLinkItem from "./media-link-item/media-link-item";

export interface MediaLinkItemProps {
  title: string;
  icon: IconProp;
  href?: string;
  iconSize?: SizeProp;
  className?: string;
}

function MediaLinksList() {
  const mediaLinksList: MediaLinkItemProps[] = [
    {title: 'dpischalka@gmail.com', icon: faEnvelope, className: 'mail'},
    {title: 'dpischalka', icon: faTwitter, href: 'https://twitter.com/dpischalka', className: 'twitter'},
    {title: 'dpischalka', icon: faGithub, href: 'https://github.com/dpischalka', className: 'github'},
    {title: 'dpischalka', icon: faLinkedinIn, href: 'https://www.linkedin.com/in/dpischalka/', className: 'linkedIn'},
    {title: 'dpischalka', icon: faMedium, href: 'https://medium.com/@dpischalka/', className: 'medium'},
  ];
  const [mediaItems] = useState<MediaLinkItemProps[]>(mediaLinksList);
  const mediaLinkItems = mediaItems
    .filter(({icon, title}: MediaLinkItemProps): boolean => Boolean(icon && title))
    .map((mediaLinkItemProps: MediaLinkItemProps, index: number): JSX.Element => {
      mediaLinkItemProps.className = `column media-link-item-${index} ${mediaLinkItemProps.className}`;

      return <MediaLinkItem key={index} {...mediaLinkItemProps}/>
    });

  return (
    <div className="media-links-container columns is-desktop">{mediaLinkItems}</div>
  )
}

export default MediaLinksList;
