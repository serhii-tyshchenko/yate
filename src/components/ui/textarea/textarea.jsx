import PropTypes from 'prop-types';
import { getClassName } from 'utils';

import './textarea.scss';

const NAME_SPACE = 'textarea';

function Textarea(props) {
  const {
    name,
    value,
    onChange,
    className,
    placeholder,
    required,
    autofocus,
    disabled,
    readOnly,
    label,
    innerRef,
  } = props;

  const componentClassName = getClassName(NAME_SPACE, className);

  return (
    <>
      {label && (<label htmlFor={name} className={`${NAME_SPACE}__label`}>{label}</label>)}
      <textarea
        name={name}
        id={name}
        value={value}
        className={componentClassName}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoFocus={autofocus}
        disabled={disabled}
        readOnly={readOnly}
        ref={innerRef}
      />
    </>
  );
}

Textarea.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  autofocus: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  label: PropTypes.string,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
};

Textarea.defaultProps = {
  className: '',
  onChange: null,
  value: '',
  name: 'textarea',
  placeholder: '',
  required: false,
  autofocus: false,
  disabled: false,
  readOnly: false,
  label: '',
  innerRef: null,
};

export { Textarea };
