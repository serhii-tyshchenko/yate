import PropTypes from 'prop-types';
import { getClassName } from 'utils';

import './button.scss';

const NAME_SPACE = 'button';

function Button(props) {
  const {
    onClick,
    className,
    type,
    btnType,
    size,
    text,
    title,
    disabled,
    testId,
  } = props;

  const componentClassName = getClassName(NAME_SPACE, `${NAME_SPACE}--${btnType}`, `${NAME_SPACE}--${size}`, className);

  return (
    <button
      type={type}
      className={componentClassName}
      onClick={onClick}
      disabled={disabled}
      title={title}
      data-testid={testId}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  btnType: PropTypes.oneOf(['primary', 'secondary', 'action']),
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  text: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  testId: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  onClick: null,
  type: 'button',
  btnType: 'primary',
  size: 'normal',
  text: 'Button',
  title: '',
  disabled: false,
  testId: 'button',
};

export { Button };
