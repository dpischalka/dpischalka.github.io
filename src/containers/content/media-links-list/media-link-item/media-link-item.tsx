import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './media-link-item.scss';
import { MediaLinkItemProps } from "../media-links-list";

function MediaLinkItem({className, title, icon, href, iconSize = '3x'}: MediaLinkItemProps) {
  const Icon: JSX.Element = <FontAwesomeIcon className="contact-item-icon" icon={icon} size={iconSize}/>;
  const LinkEl: JSX.Element = (
    <a className={`contact-item contact-item-link ${className}`}
       rel="noopener noreferrer"
       target="_blank"
       href={href}
       title={href}>
      <span className="contact-item-icon">{Icon}</span>
      <span className="contact-item-title">{title}</span>
    </a>
  );
  const SpanEl: JSX.Element = (
    <div className={`contact-item ${className}`} title={title}>
      <span className="contact-item-icon">{Icon}</span>
      <span className="contact-item-title">{title}</span>
    </div>
  );

  return (href ? LinkEl : SpanEl);
}

export default MediaLinkItem;
