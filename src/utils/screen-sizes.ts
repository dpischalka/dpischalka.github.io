const GAP: number = 32;
const TABLET: number = 769;
const DESKTOP: number = 960 + (2 * GAP);
const WIDESCREEN: number = 1152 + (2 * GAP);
const FULLHD: number = 1344 + (2 * GAP);

export enum SCREEN_SIZES_NAMES_LIST {
  TABLET = 'TABLET',
  DESKTOP = 'DESKTOP',
  WIDESCREEN = 'WIDESCREEN',
  FULLHD = 'FULLHD',
}

export const screenSizes = {
  [SCREEN_SIZES_NAMES_LIST.TABLET]: TABLET,
  [SCREEN_SIZES_NAMES_LIST.DESKTOP]: DESKTOP,
  [SCREEN_SIZES_NAMES_LIST.WIDESCREEN]: WIDESCREEN,
  [SCREEN_SIZES_NAMES_LIST.FULLHD]: FULLHD
};

export function detectScreenSize(screenWidth: number): string {
  const TABLET: number = screenSizes[SCREEN_SIZES_NAMES_LIST.TABLET];
  const DESKTOP: number = screenSizes[SCREEN_SIZES_NAMES_LIST.DESKTOP];
  const WIDESCREEN: number = screenSizes[SCREEN_SIZES_NAMES_LIST.WIDESCREEN];
  const FULLHD: number = screenSizes[SCREEN_SIZES_NAMES_LIST.FULLHD];

  switch (true) {
    case screenWidth < TABLET:
      return SCREEN_SIZES_NAMES_LIST.TABLET;
    case screenWidth >= TABLET && screenWidth <= DESKTOP:
      return SCREEN_SIZES_NAMES_LIST.DESKTOP;
    case screenWidth >= DESKTOP && screenWidth <= WIDESCREEN:
      return SCREEN_SIZES_NAMES_LIST.WIDESCREEN;
    case screenWidth >= WIDESCREEN && screenWidth <= FULLHD:
    case screenWidth >= FULLHD:
      return SCREEN_SIZES_NAMES_LIST.FULLHD;
    default:
      return null;
  }
}
