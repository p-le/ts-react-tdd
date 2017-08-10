import * as React from 'react';

interface IIconProps {
  name: string;
  className?: string;
}

export const Icon: React.SFC<IIconProps> = ({ className, name })  => (
  <i className={`material-icons ${className}`}>{name}</i>
);
