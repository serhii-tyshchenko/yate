import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { PORTAL_ROOT } from 'constants';
import { getClassName } from 'utils';
import { IconButton } from '../icon-button';

import './modal.scss';

const NAME_SPACE = 'modal';

function Modal(props) {
  const { title, isOpen, onClose, children, className } = props;

  const componentClassName = getClassName(NAME_SPACE, className);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    (
      <div className={`${NAME_SPACE}__backdrop`}>
        <div
          role="dialog"
          aria-labelledby="ui-modal-title"
          aria-modal="true"
          className={componentClassName}
        >
          <div className={`${NAME_SPACE}__header`}>
            <h4 id="ui-modal-title" className={`${NAME_SPACE}__title`}>{title}</h4>
            <IconButton
              className={`${NAME_SPACE}__btn-close`}
              icon="cancel"
              onClick={onClose}
              title="Close"
              size="big"
              autoFocus
            />
          </div>
          <div className={`${NAME_SPACE}__content`}>{children}</div>
        </div>
      </div>
    ), PORTAL_ROOT);
}

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};

Modal.defaultProps = {
  title: 'Modal title',
  isOpen: false,
  onClose: null,
  children: null,
  className: '',
};

export { Modal };
