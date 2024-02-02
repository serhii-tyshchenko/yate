import PropTypes from 'prop-types';
import { getClassName } from 'utils';
import './select.scss';

const NAME_SPACE = 'select';

function Select(props) {
  const {
    value,
    onChange,
    options,
    className,
    title,
    required,
    disabled,
    size,
    name,
    label,
    error,
    style
  } = props;

  const componentClassName = getClassName(NAME_SPACE, `${NAME_SPACE}--${size}`, { [`${NAME_SPACE}--error`]: error }, className);

  return (
    <>
      {label && (<label htmlFor={name} className={`${NAME_SPACE}__label`}>{label}</label>)}
      <select
        name={name}
        id={name}
        onChange={onChange}
        value={value}
        required={required}
        className={componentClassName}
        title={title}
        disabled={disabled}
        style={style}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
            className={`${NAME_SPACE}__option`}
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && (<div className={`${NAME_SPACE}__error`}>{error}</div>)}
    </>
  );
}

Select.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'normal', 'big', 'large']),
  name: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  style: PropTypes.object,
};

Select.defaultProps = {
  className: '',
  onChange: null,
  value: '',
  title: 'Select option',
  name: 'select',
  label: '',
  options: [
    {
      value: 'opt1',
      label: 'Option 1',
    },
    {
      value: 'opt2',
      label: 'Option 2',
    },
    {
      value: 'opt3',
      label: 'Option 3',
    },
  ],
  required: false,
  disabled: false,
  size: 'normal',
  error: '',
  style: {},
};

export { Select };
