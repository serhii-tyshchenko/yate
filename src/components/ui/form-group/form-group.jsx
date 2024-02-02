import PropTypes from 'prop-types';
import { getClassName } from 'utils';

import './form-group.scss';

const NAME_SPACE = 'form-group';

function FormGroup(props) {
  const {
    className, children,
  } = props;

  const componentClassName = getClassName(NAME_SPACE, className);

  return (
    <div className={componentClassName}>
      {children}
    </div>
  );
}

FormGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

FormGroup.defaultProps = {
  className: '',
  children: null,
};

export { FormGroup };
