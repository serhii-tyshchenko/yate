import { memo } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { Input, Button } from 'components/ui';
import useFindAndReplace from './use-find-and-replace';
import './find-and-replace-panel.styles.scss';

const NAME_SPACE = 'find-and-replace-panel';

function FindAndReplacePanel(props) {
  const { isOpen, onConfirm, selectedText } = props;

  const {
    formValues,
    onFormChange,
    handleConfirm,
    handleKeyDown,
  } = useFindAndReplace(onConfirm, selectedText);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={NAME_SPACE}>
      <div>
        <Input
          name="find"
          label="Find what"
          value={formValues.find}
          onChange={onFormChange}
          autoFocus={isEmpty(selectedText)}
        />
      </div>
      <div>
        <Input
          name="replace"
          label="Replace with"
          value={formValues.replace}
          onChange={onFormChange}
          onKeyDown={handleKeyDown}
          autoFocus={!isEmpty(selectedText)}
        />
      </div>
      <Button
        text="Replace All"
        onClick={handleConfirm}
        disabled={isEmpty(formValues.find)}
      />
    </div>
  )
}

FindAndReplacePanel.propTypes = {
  isOpen: PropTypes.bool,
  onConfirm: PropTypes.func,
  selectedText: PropTypes.string,
};

FindAndReplacePanel.defaultProps = {
  isOpen: false,
  onConfirm: null,
  selectedText: '',
};

export default memo(FindAndReplacePanel);