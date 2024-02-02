import PropTypes from 'prop-types';
import { Button } from '../button';
import { Modal } from '../modal';

function ModalConfirm(props) {
  const {
    title, isOpen, onCancel, onConfirm, children, confirmBtnTitle, cancelBtnTitle, className,
    isConfirmDisabled, isCancelDisabled } = props;

  return (
    <Modal
      title={title}
      isOpen={isOpen}
      onClose={onCancel}
      className={className}
    >
      <div className="flex-grow-1 mb-6">{children}</div>
      <div className="d-flex justify-content-between">
        <Button btnType="secondary" text={cancelBtnTitle || 'Cancel'} onClick={onCancel} disabled={isCancelDisabled} />
        <Button btnType="primary" text={confirmBtnTitle || 'Confirm'} onClick={onConfirm} disabled={isConfirmDisabled} />
      </div>
    </Modal>
  );
}

ModalConfirm.propTypes = {
  title: PropTypes.string,
  confirmBtnTitle: PropTypes.string,
  cancelBtnTitle: PropTypes.string,
  isOpen: PropTypes.bool,
  isConfirmDisabled: PropTypes.bool,
  isCancelDisabled: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

ModalConfirm.defaultProps = {
  title: 'Modal Confirm Title',
  isOpen: false,
  isConfirmDisabled: false,
  isCancelDisabled: false,
  confirmBtnTitle: '',
  cancelBtnTitle: '',
  className: '',
};

export { ModalConfirm };
