import React from 'react';
import FigmaIcon from '@shared/assets/socials/Figma.svg';
import YoutubeIcon from '@shared/assets/socials/footer6.svg';
import GithubIcon from '@shared/assets/socials/Github_white.svg';
import TelegramIcon from '@shared/assets/socials/Telegram_white.svg';
import TiktokIcon from '@shared/assets/socials/tiktok.svg';
import LogoWhiteTree from '@shared/assets/navigation/logoWhiteTree.svg';
import LogoPurpleTree from '@shared/assets/navigation/logoPurpleTree.svg';
import LogoBlackText from '@shared/assets/navigation/logoBlackText.svg';
import LogoWhiteText from '@shared/assets/navigation/logoWhiteText.svg';
import BurgerBtn from '@shared/assets/navigation/burger-btn.svg';
import SidebarListIcon from '@shared/assets/inlineIcons/check-circle.svg';

export type IconName =
  | 'figma'
  | 'youtube'
  | 'github'
  | 'telegram'
  | 'tiktok'
  | 'logoWhiteTree'
  | 'logoPurpleTree'
  | 'logoBlackText'
  | 'logoWhiteText'
  | 'burger'
  | 'sidebarListIcon';

export const iconList: Record<IconName, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  figma: FigmaIcon,
  youtube: YoutubeIcon,
  github: GithubIcon,
  telegram: TelegramIcon,
  tiktok: TiktokIcon,
  logoWhiteTree: LogoWhiteTree,
  logoPurpleTree: LogoPurpleTree,
  logoBlackText: LogoBlackText,
  logoWhiteText: LogoWhiteText,
  burger: BurgerBtn,
  sidebarListIcon: SidebarListIcon,
};
