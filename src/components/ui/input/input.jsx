import PropTypes from 'prop-types';
import { getClassName } from 'utils';

import './input.scss';

const NAME_SPACE = 'input';

function Input(props) {
  const {
    type,
    name,
    value,
    onChange,
    onKeyDown,
    className,
    placeholder,
    required,
    autoFocus,
    disabled,
    label,
    error,
    min,
    max,
  } = props;

  const componentClassName = getClassName(NAME_SPACE, { [`${NAME_SPACE}--error`]: error }, className);

  return (
    <>
      {label && (<label htmlFor={name} className={`${NAME_SPACE}__label`}>{label}</label>)}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        className={componentClassName}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        required={required}
        autoFocus={autoFocus}
        disabled={disabled}
        size={value.length}
        min={min}
        max={max}
      />
      {error && (<div className={`${NAME_SPACE}__error`}>{error}</div>)}
    </>
  );
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'password', 'email', 'tel', 'url', 'date', 'time', 'datetime-local']),
  name: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  error: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
};

Input.defaultProps = {
  className: '',
  onChange: null,
  onKeyDown: null,
  value: '',
  type: 'text',
  name: 'ui-input',
  placeholder: null,
  required: false,
  autoFocus: false,
  disabled: false,
  label: '',
  error: '',
  min: null,
  max: null,
};

export { Input };
