import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './media-link-item.scss';
import { MediaLinkItemProps } from "../media-links-list";


function MediaLinkItem(props: MediaLinkItemProps) {
  return (
    <div className={props.className}>
      <FontAwesomeIcon icon={props.icon} size="3x"/>
      <span>{props.title}</span>
    </div>
  );
}

export default MediaLinkItem;
