import React from 'react';
import t from 'prop-types';
import '../styles/index.scss';

export interface IconProps {
  type: string;
  size?: number;
  color?: string;
  onClick?: React.MouseEventHandler;
}

const Icon: React.FC<IconProps> = ({ type, size, color, onClick }) => {
  const styles = () => {
    return {
      fontSize: size,
      color: color,
      cursor: onClick ? 'pointer' : undefined
    };
  };
  return (
    <i
      className={`qnet-icon qnet-icon-${type}`}
      style={styles()}
      onClick={onClick}
    ></i>
  );
};

Icon.propTypes = {
  type: t.string.isRequired,
  size: t.number,
  color: t.string,
  onClick: t.func
};

export default Icon;
