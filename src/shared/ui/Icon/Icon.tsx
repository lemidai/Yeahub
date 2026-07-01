import React from 'react';
import { IconName, iconList } from './icons-map';

interface IconProps {
  name: IconName;
  size?: number | string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, width, height, className }) => {
  const IconComponent = iconList[name];

  if (!IconComponent) {
    console.warn(`Icon with name "${name}" not found.`);
    return null;
  }

  return <IconComponent width={width || size} height={height || size} className={className} />;
};
