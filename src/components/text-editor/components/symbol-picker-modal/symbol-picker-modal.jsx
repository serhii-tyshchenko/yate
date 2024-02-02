import { memo } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/ui';
import { SYMBOLS } from 'constants';

import './symbol-picker-modal.styles.scss';

function SymbolPickerModal(props) {
  const { isOpen, onClose, onPick } = props;
  const handleSymbolClick = (ev) => {
    const symbol = ev.target.value;
    navigator.clipboard.writeText(symbol);
    onPick(symbol);
    onClose();
  };

  return (
    <Modal
      title="Insert Symbol"
      isOpen={isOpen}
      onClose={onClose}
    >
      <ul className="symbol-list">
        {SYMBOLS.map(({ id, value, title }) => (
          <li key={id}>
            <label htmlFor={id} className="symbol-list-item" title={title}>
              {value}
            </label>
            <input
              type="radio"
              id={id}
              value={value}
              onClick={handleSymbolClick}
              name="symbol"
              title
            />
          </li>
        ))}
      </ul>
    </Modal>
  )
}

SymbolPickerModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onPick: PropTypes.func,
};

SymbolPickerModal.defaultProps = {
  isOpen: false,
  onClose: null,
  onPick: null,
};

export default memo(SymbolPickerModal);