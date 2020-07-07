import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './media-link-item.scss';
import { MediaLinkItemProps } from "../media-links-list";

function MediaLinkItem({className, title, icon, href, iconSize = '3x'}: MediaLinkItemProps) {
  const Icon: JSX.Element = <FontAwesomeIcon className="contact-item-icon" icon={icon} size={iconSize}/>;
  const Link: JSX.Element = href
    ? <a href={href} title={title} className="contact-item-title" rel="noopener noreferrer" target="_blank">{Icon}</a>
    : <span title={title} className="contact-item-title">{Icon}</span>

  return (
    <div className={`contact-item ${className}`}>{Link}</div>
  );
}

export default MediaLinkItem;
