import { useState } from 'react';
import PropTypes from 'prop-types';
import { getClassName } from 'utils';
import './tabs.scss';

const NAME_SPACE = 'tabs';

const getTabClass = (index, activeTabIndex) =>
  getClassName(`${NAME_SPACE}__item`, {
    [`${NAME_SPACE}__item--active`]: index === activeTabIndex,
  });

function Tabs(props) {
  const {
    className, labels, children, activeTab, onTabClick, tabsPosition,
  } = props;

  const [activeTabIndex, setActiveTabIndex] = useState(activeTab);

  const handleTabClick = (e) => {
    setActiveTabIndex(labels.indexOf(e.target.value));
    if (onTabClick) {
      onTabClick();
    }
  }

  const componentClassName = getClassName(
    NAME_SPACE,
    `${NAME_SPACE}--${tabsPosition}`,
    className
  );

  return (
    <div className={componentClassName}>
      <ol className={`${NAME_SPACE}__list`}>
        {labels.map((label, index) => (
          <li key={label} className={getTabClass(index, activeTabIndex)}>
            <input
              className={`${NAME_SPACE}__btn`}
              type="button"
              onClick={handleTabClick}
              value={label}
            />
          </li>
        ))}
      </ol>
      <div className={`${NAME_SPACE}__content`}>
        {children.map((child, index) => (index === activeTabIndex ? child : null))}
      </div>
    </div>
  );
}

Tabs.propTypes = {
  className: PropTypes.string,
  labels: PropTypes.arrayOf(PropTypes.string),
  activeTab: PropTypes.number,
  children: PropTypes.node,
  onTabClick: PropTypes.func,
  tabsPosition: PropTypes.oneOf(['left', 'right', 'center']),
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

Tabs.defaultProps = {
  className: '',
  activeTab: 0,
  labels: [],
  children: null,
  onTabClick: null,
  tabsPosition: 'left',
  ref: null,
};

export { Tabs };
