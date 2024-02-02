import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { getClassName } from 'utils';

import './icon-button.styles.scss';

const NAME_SPACE = 'icon-button';

const IconButton = forwardRef((props, ref) => {
  const { icon, onClick, className, title, type, size, disabled, autoFocus, toggled } = props;

  const componentClassName = getClassName(
    NAME_SPACE,
    `icon-${icon}`,
    `${NAME_SPACE}--${size}`,
    { [`${NAME_SPACE}--toggled`]: toggled },
    className
  );

  return (
    <button
      type={type}
      className={componentClassName}
      onClick={onClick}
      title={title}
      aria-label={title}
      disabled={disabled}
      ref={ref}
      autoFocus={autoFocus}
    />
  );
});

IconButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.oneOf(['small', 'normal', 'big', 'large']),
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  toggled: PropTypes.bool,
};

IconButton.defaultProps = {
  className: '',
  onClick: null,
  type: 'button',
  icon: '',
  title: 'Click me',
  size: 'normal',
  disabled: false,
  autoFocus: false,
  toggled: false,
};

export { IconButton };
