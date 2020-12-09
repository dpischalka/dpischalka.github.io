import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { faGithub, faLinkedinIn, faTwitter, faMedium } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

import './media-links-list.scss';
import MediaLinkItem from "./media-link-item/media-link-item";
import { detectScreenSize, SCREEN_SIZES_NAMES_LIST } from '../../../utils/screen-sizes';
import { StringMap } from "../../../utils/common";

export interface MediaLinkItemProps {
  title: string;
  icon: IconProp;
  href?: string;
  iconSize?: SizeProp;
  className?: string;
}

const ICON_SIZES: StringMap<SizeProp> = {
  [SCREEN_SIZES_NAMES_LIST.TABLET]: '3x',
  [SCREEN_SIZES_NAMES_LIST.DESKTOP]: '3x',
  [SCREEN_SIZES_NAMES_LIST.FULLHD]: '3x',
  [SCREEN_SIZES_NAMES_LIST.WIDESCREEN]: '3x',
};

const mediaLinksList: MediaLinkItemProps[] = [
  {title: 'dpischalka@gmail.com', icon: faEnvelope, className: 'mail'},
  {title: 'dpischalka', icon: faTwitter, href: 'https://twitter.com/dpischalka', className: 'twitter'},
  {title: 'dpischalka', icon: faGithub, href: 'https://github.com/dpischalka', className: 'github'},
  {title: 'dpischalka', icon: faLinkedinIn, href: 'https://www.linkedin.com/in/dpischalka/', className: 'linkedIn'},
  {title: 'dpischalka', icon: faMedium, href: 'https://medium.com/@dpischalka/', className: 'medium'},
];

function iconSizeChangeHandler(mediaLinksState: MediaLinkItemProps[], mediaLinksStateSetter: Dispatch<SetStateAction<MediaLinkItemProps[]>>): void {
  const SCREEN_WIDTH = detectScreenSize(window.innerWidth) ?? null;

  if (SCREEN_WIDTH) {
    mediaLinksStateSetter(mediaLinksList
      .filter(({icon, title}: MediaLinkItemProps): boolean => Boolean(icon && title))
      .map((mediaLinkItemProps: MediaLinkItemProps, index: number): MediaLinkItemProps => ({
        ...mediaLinkItemProps,
        iconSize: ICON_SIZES[SCREEN_WIDTH],
      })));
  }
}

function MediaLinksList() {
  const [mediaItems, updateMediaItems] = useState<MediaLinkItemProps[]>(mediaLinksList);

  const mediaLinkItems = mediaItems
    .filter(({icon, title}: MediaLinkItemProps): boolean => Boolean(icon && title))
    .map((mediaLinkItemProps: MediaLinkItemProps, index: number): MediaLinkItemProps => ({
      ...mediaLinkItemProps,
      className: `column media-link-item-${index} ${mediaLinkItemProps.className}`,
    }));

  useEffect(() => {
    window.addEventListener('resize', iconSizeChangeHandler.bind(MediaLinksList, mediaItems, updateMediaItems));
    window.addEventListener('load', iconSizeChangeHandler.bind(MediaLinksList, mediaItems, updateMediaItems));
  }, [mediaItems]);

  return (
    <div className="media-links-container columns is-mobile is-gapless">{mediaLinkItems.map(
      (item: MediaLinkItemProps, index: number): JSX.Element => <MediaLinkItem key={index} {...item}/>
    )}</div>
  )
}

export default MediaLinksList;
