import { HOT_KEYS } from 'constants';

export const getButtonsConfig = ({
  wrapWithText,
  insertText,
  changeCase,
  toggleSymbolPicker,
  toggleFindAndReplace,
  toggleTableConstructor,
  toggleFullScreen,
  isFindAndReplaceOpen,
  isFullScreen,
}) => [
  {
    icon: 'bold',
    onClick: () => wrapWithText('strong'),
    title: `Bold (${HOT_KEYS.bold})`,
    className: 'mr-1',
  },
  {
    icon: 'italic',
    onClick: () => wrapWithText('em'),
    title: `Italic (${HOT_KEYS.italic})`,
    className: 'mr-1',
  },
  {
    icon: 'underline',
    onClick: () => wrapWithText('u'),
    title: `Underline (${HOT_KEYS.underline})`,
    className: 'mr-1',
  },
  {
    icon: 'strike',
    onClick: () => wrapWithText('s'),
    title: `Strikethrough (${HOT_KEYS.strikethrough})`,
    className: 'mr-1',
  },
  {
    icon: 'subscript',
    onClick: () => wrapWithText('sub'),
    title: `Subscript (${HOT_KEYS.subscript})`,
    className: 'mr-1',
  },
  {
    icon: 'superscript',
    onClick: () => wrapWithText('sup'),
    title: `Superscript (${HOT_KEYS.superscript})`,
    className: 'mr-1',
  },
  {
    icon: 'paragraph',
    onClick: () => wrapWithText('p'),
    title: `Paragraph (${HOT_KEYS.paragraph})`,
    className: 'mr-1',
  },
  {
    icon: 'font',
    onClick: () => changeCase(),
    title: `Change Case (${HOT_KEYS.changeCase})`,
    className: 'mr-1',
  },
  {
    icon: 'level-down',
    onClick: () => insertText('<br />'),
    title: `Insert Line Break (${HOT_KEYS.lineBreak})`,
    className: 'mr-1',
  },
  {
    icon: 'table',
    onClick: () => toggleTableConstructor(),
    title: `Table Constructor (${HOT_KEYS.table})`,
    className: 'mr-1',
  },
  {
    icon: 'at',
    onClick: () => toggleSymbolPicker(),
    title: `Insert Symbol (${HOT_KEYS.symbol})`,
    className: 'mr-4',
  },
  {
    icon: 'search',
    onClick: () => toggleFindAndReplace(),
    title: `Find And Replace (${HOT_KEYS.findAndReplace})`,
    className: 'mr-1',
    toggled: isFindAndReplaceOpen,
  },
  {
    icon: isFullScreen ? 'resize-small' : 'resize-full',
    onClick: () => toggleFullScreen(),
    title: `Full Screen (${HOT_KEYS.fullScreen})`,
    className: 'ml-auto',
  },
];

export const getVisualButtonsConfig = ({
  toggleFindAndReplace,
  toggleFullScreen,
  isFindAndReplaceOpen,
  isFullScreen,
}) => [
  {
    icon: 'search',
    onClick: () => toggleFindAndReplace(),
    title: `Find And Replace (${HOT_KEYS.findAndReplace})`,
    className: 'mr-1',
    toggled: isFindAndReplaceOpen,
  },
  {
    icon: isFullScreen ? 'resize-small' : 'resize-full',
    onClick: () => toggleFullScreen(),
    title: `Full Screen (${HOT_KEYS.fullScreen})`,
    toggled: isFullScreen,
    className: 'ml-auto',
  },
];

export const restoreCaretPosition = (ref, position) => {
  ref.current.focus();
  // eslint-disable-next-line no-param-reassign
  ref.current.selectionStart = position;
  // eslint-disable-next-line no-param-reassign
  ref.current.selectionEnd = position;
};

export const normalizeValue = (value) =>
  value
    .replace(/<b>/g, '<strong>')
    .replace(/<br>/g, '<br />')
    .replace(/<i>/g, '<em>')
    .replace(/<\/b>/g, '</strong>')
    .replace(/<\/i>/g, '</em>');
