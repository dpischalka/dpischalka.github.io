import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './media-link-item.scss';
import { MediaLinkItemProps } from "../media-links-list";

function MediaLinkItem({className, title, icon, href, iconSize = '3x'}: MediaLinkItemProps) {
  const Icon: JSX.Element = <FontAwesomeIcon className="contact-item-icon" icon={icon} size={iconSize}/>;

  return (
    href
      ? (
        <a className={`contact-item ${className}`} rel="noopener noreferrer" target="_blank" href={href} title={href}>
          <span className="contact-item-icon">{Icon}</span>
          <span className="contact-item-title">{title}</span>
        </a>
      )
      : (
        <div className={`contact-item ${className}`} title={title}>
          <span className="contact-item-icon">{Icon}</span>
          <span className="contact-item-title">{title}</span>
        </div>
      )
  );
}

export default MediaLinkItem;
