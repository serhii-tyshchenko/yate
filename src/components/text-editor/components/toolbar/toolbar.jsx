import { memo } from 'react';
import PropTypes from 'prop-types';

import { IconButton } from 'components/ui';

function Toolbar(props) {
  const { config } = props;

  return (
    <div className="d-flex align-items-center mb-2">
      {config.map(({ icon, title, onClick, className, disabled, toggled }) => (
        <IconButton
          key={icon}
          icon={icon}
          title={title}
          onClick={onClick}
          className={className}
          disabled={disabled}
          toggled={toggled}
        />
      ))}
    </div>
  );
}

Toolbar.propTypes = {
  config: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
  })).isRequired,
};

export default memo(Toolbar);