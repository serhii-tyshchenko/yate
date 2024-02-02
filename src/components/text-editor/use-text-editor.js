import { useCallback } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

import { HOT_KEYS } from 'constants';
import { useToggle } from 'hooks';
import { getSelection } from 'utils';

import {
  getButtonsConfig,
  getVisualButtonsConfig,
  restoreCaretPosition,
  normalizeValue,
} from './text-editor.utils';

const useTextEditor = ({ onChange, value, textareaRef }) => {
  const [isSymbolPickerOpen, toggleSymbolPicker] = useToggle();
  const [isFindAndReplaceOpen, toggleFindAndReplace] = useToggle();
  const [isTableConstructorOpen, toggleTableConstructor] = useToggle();
  const [isFullScreen, toggleFullScreen] = useToggle();
  const [isMobileView, toggleMobileView] = useToggle();

  const handleTextEditorChange = useCallback(
    (e) => onChange(e.target.value),
    [onChange],
  );

  const handleVisualEditorChange = useCallback(
    (e) => onChange(normalizeValue(e.target.innerHTML)),
    [onChange],
  );

  const wrapWithText = async (tag, className) => {
    const { start, end } = getSelection(textareaRef);
    await onChange(
      `${value.substring(0, start)}<${tag}${
        className ? ` class="${className}"` : ''
      }>${value.substring(start, end)}</${tag}>${value.substring(end)}`,
    );
    const newStart =
      end + tag.length + 2 + (className ? className.length + 9 : 0);
    restoreCaretPosition(textareaRef, newStart);
  };

  const wrapWithCustomClass = (className) => wrapWithText('span', className);

  const insertText = async (text) => {
    const { start, end } = getSelection(textareaRef);
    await onChange(
      `${value.substring(0, start)}${text}${value.substring(end)}`,
    );
    restoreCaretPosition(textareaRef, start + text.length);
  };

  const changeCase = () => {
    const selectedText = getSelection(textareaRef).value;
    const newText =
      // eslint-disable-next-line no-nested-ternary
      selectedText === selectedText.toUpperCase()
        ? selectedText.toLowerCase()
        : selectedText === selectedText.toLowerCase()
          ? selectedText.charAt(0).toUpperCase() + selectedText.slice(1)
          : selectedText.toUpperCase();

    insertText(newText);
  };

  const textEditorToolbarConfig = getButtonsConfig({
    wrapWithText,
    insertText,
    changeCase,
    toggleSymbolPicker,
    toggleFindAndReplace,
    toggleTableConstructor,
    toggleFullScreen,
    isFindAndReplaceOpen,
    isFullScreen,
  });

  const visualEditorToolbarConfig = getVisualButtonsConfig({
    toggleFindAndReplace,
    toggleFullScreen,
    toggleMobileView,
    isFindAndReplaceOpen,
    isFullScreen,
    isMobileView,
  });

  const handleReplaceConfirm = (formValues) =>
    onChange(value.replaceAll(formValues.find, formValues.replace));

  const handleScriptPick = (rules) => {
    let newValue = value;
    rules.forEach((rule) => {
      newValue = newValue.replaceAll(rule.search, rule.replace);
    });
    onChange(newValue);
  };

  const useHotkeysOptions = {
    enableOnFormTags: true,
  };

  useHotkeys(HOT_KEYS.bold, () => wrapWithText('strong'), useHotkeysOptions);
  useHotkeys(HOT_KEYS.italic, () => wrapWithText('em'), useHotkeysOptions);
  useHotkeys(HOT_KEYS.underline, () => wrapWithText('u'), useHotkeysOptions);
  useHotkeys(HOT_KEYS.paragraph, () => wrapWithText('p'), useHotkeysOptions);
  useHotkeys(HOT_KEYS.lineBreak, () => insertText('<br />'), useHotkeysOptions);
  useHotkeys(HOT_KEYS.changeCase, changeCase, useHotkeysOptions);
  useHotkeys(HOT_KEYS.subscript, () => wrapWithText('sub'), useHotkeysOptions);
  useHotkeys(
    HOT_KEYS.superscript,
    () => wrapWithText('sup'),
    useHotkeysOptions,
  );
  useHotkeys(
    HOT_KEYS.strikethrough,
    () => wrapWithText('s'),
    useHotkeysOptions,
  );
  useHotkeys(HOT_KEYS.table, toggleTableConstructor, useHotkeysOptions);
  useHotkeys(HOT_KEYS.symbol, toggleSymbolPicker, useHotkeysOptions);
  useHotkeys(HOT_KEYS.findAndReplace, toggleFindAndReplace, useHotkeysOptions);
  useHotkeys(HOT_KEYS.fullScreen, toggleFullScreen, useHotkeysOptions);

  return {
    isSymbolPickerOpen,
    toggleSymbolPicker,
    isFindAndReplaceOpen,
    toggleFindAndReplace,
    isTableConstructorOpen,
    toggleTableConstructor,
    handleTextEditorChange,
    handleVisualEditorChange,
    insertText,
    handleReplaceConfirm,
    handleScriptPick,
    textEditorToolbarConfig,
    visualEditorToolbarConfig,
    wrapWithText,
    wrapWithCustomClass,
    isFullScreen,
    toggleMobileView,
    isMobileView,
  };
};

export default useTextEditor;
