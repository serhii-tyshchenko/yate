import { memo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ModalConfirm, Input, FormGroup, Select } from 'components/ui';

import { INITIAL_CONFIG } from './table-constructor-modal.constants';
import { generateTable } from './table-constructor-modal.utils';

function TableConstructorModal(props) {
  const { isOpen, onClose, onConfirm } = props;
  const [config, setConfig] = useState(INITIAL_CONFIG);

  const handleClose = useCallback(() => {
    setConfig(INITIAL_CONFIG);
    onClose();
  }, [onClose]);

  const handleConfirm = () => {
    onConfirm(generateTable(config));
    handleClose();
  };

  const handleChange = useCallback((ev) => {
    const { name, value } = ev.target;
    setConfig((prevState) => ({ ...prevState, [name]: value }));
  }, [setConfig]);

  return (
    <ModalConfirm
      title="Table Constructor"
      isOpen={isOpen}
      onCancel={handleClose}
      onConfirm={handleConfirm}
    >
      <FormGroup className="d-flex justify-content-between align-items-center gap-2">
        <div>
          <Input
            label="Rows"
            type="number"
            name="rows"
            min={1}
            value={config.rows}
            onChange={handleChange}
          />
        </div>
        <div>
          <Input
            label="Columns"
            type="number"
            name="columns"
            min={1}
            value={config.columns}
            onChange={handleChange}
          />
        </div>
        <div>
          <Select
            label="Headers"
            name="headers"
            options={[
              { value: 'none', label: "None" },
              { value: 'row', label: "First Row" },
              { value: 'column', label: "First Column" },
              { value: 'both', label: "Both" },
            ]}
            value={config.headers}
            onChange={handleChange}
          />
        </div>
      </FormGroup>
      <FormGroup>
        <Input
          label="Caption"
          name="caption"
          value={config.title}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Input
          label="Classes"
          name="classes"
          value={config.classes}
          onChange={handleChange}
          placeholder="CSS classes separated by space"
        />
      </FormGroup>
    </ModalConfirm>
  )
}

TableConstructorModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
};

TableConstructorModal.defaultProps = {
  isOpen: false,
  onClose: null,
  onConfirm: null,
};

export default memo(TableConstructorModal);