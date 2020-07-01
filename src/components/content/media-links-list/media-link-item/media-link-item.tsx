import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './media-link-item.scss';
import { MediaLinkItemProps } from "../media-links-list";

function MediaLinkItem({className, title, icon, href}: MediaLinkItemProps) {
  return (
    <div className={className}>
      <FontAwesomeIcon icon={icon} size="3x"/>
      {
        href
          ? <a href={href} rel="noopener noreferrer" target="_blank">{title}</a>
          : <span>{title}</span>
      }
    </div>
  );
}

export default MediaLinkItem;
