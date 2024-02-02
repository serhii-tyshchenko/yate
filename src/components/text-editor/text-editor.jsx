import { useRef } from 'react';
import PropTypes from 'prop-types';
import { getClassName, getSelection } from 'utils';
import { Textarea, Tabs } from '../ui';
import {
  SymbolPickerModal,
  FindAndReplacePanel,
  TableConstructorModal,
  Toolbar,
} from './components';

import useTextEditor from './use-text-editor';

import './text-editor.styles.scss';

const NAME_SPACE = 'text-editor';

function TextEditor(props) {
  const {
    value,
    onChange,
    className,
  } = props;

  const textareaRef = useRef(null);

  const {
    isSymbolPickerOpen,
    toggleSymbolPicker,
    isFindAndReplaceOpen,
    toggleFindAndReplace,
    isTableConstructorOpen,
    toggleTableConstructor,
    handleTextEditorChange,
    handleVisualEditorChange,
    handleReplaceConfirm,
    insertText,
    textEditorToolbarConfig,
    visualEditorToolbarConfig,
    isFullScreen,
  } = useTextEditor({ value, onChange, textareaRef });

  const componentClassName = getClassName(NAME_SPACE, 'p-2', { [`${NAME_SPACE}--full-screen`]: isFullScreen }, className);

  return (
    <>
      <Tabs labels={['Visual', 'Text']} tabsPosition="right" className={componentClassName}>
        <>
          <Toolbar config={visualEditorToolbarConfig} />
          <FindAndReplacePanel isOpen={isFindAndReplaceOpen} onClose={toggleFindAndReplace} onConfirm={handleReplaceConfirm} />
          <div
            dangerouslySetInnerHTML={{ __html: value }}
            contentEditable
            onBlur={handleVisualEditorChange}
            className={`${NAME_SPACE}-textarea`}
          />
        </>
        <>
          <Toolbar config={textEditorToolbarConfig} />
          <FindAndReplacePanel
            isOpen={isFindAndReplaceOpen}
            onClose={toggleFindAndReplace}
            onConfirm={handleReplaceConfirm}
            selectedText={getSelection(textareaRef).value}
          />
          <Textarea
            value={value}
            onChange={handleTextEditorChange}
            className={`${NAME_SPACE}-textarea`}
            innerRef={textareaRef}
          />
        </>
      </Tabs>
      <SymbolPickerModal
        isOpen={isSymbolPickerOpen}
        onClose={toggleSymbolPicker}
        onPick={insertText}
      />
      <TableConstructorModal
        isOpen={isTableConstructorOpen}
        onClose={toggleTableConstructor}
        onConfirm={insertText}
      />
    </>
  )
}

TextEditor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

TextEditor.defaultProps = {
  value: '',
  onChange: null,
  className: '',
};

export { TextEditor };