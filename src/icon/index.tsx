import React from 'react';
import t from 'prop-types';
import classnames from 'classnames';

export interface IconProps {
  type: string;
  size?: number | string;
  color?: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ type, size, color, onClick }) => {
  const styles = () => {
    return {
      fontSize: `${size}px`,
      color: color,
      cursor: onClick ? 'pointer' : undefined
    };
  };
  return (
    <i
      className={classnames('qnet-icon', `qnet-icon-${type}`)}
      style={styles()}
      onClick={onClick}
    ></i>
  );
};

Icon.propTypes = {
  type: t.string.isRequired,
  size: t.oneOfType([t.number, t.string]),
  color: t.string,
  onClick: t.func
};

export default Icon;
