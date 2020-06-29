import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './media-link-item.scss';
import { MediaLinkItemProps } from "../media-links-list";


function MediaLinkItem({className, title, icon}: MediaLinkItemProps) {
  return (
    <div className={className}>
      <FontAwesomeIcon icon={icon} size="3x"/>
      <span>{title}</span>
    </div>
  );
}

export default MediaLinkItem;
