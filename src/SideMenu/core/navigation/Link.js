import React from 'react';
import PropTypes from 'prop-types';
import ChevronRight from 'wix-ui-icons-common/ChevronRight';
import LinkLayout from './LinkLayout';
import styles from './styles.scss';

const Link = ({children, isDiminishedHover, isActive, withArrow, badge, dataHook, disabled, ...rest}) =>
  <LinkLayout isDiminishedHover={isDiminishedHover} isActive={isActive} disabled={disabled}>
    <a data-hook={dataHook} {...rest} style={{display: 'flex', alignItems: 'center'}}>
      <span style={{flex: '1'}}>
        {children}
      </span>
      <span>
        {badge}
        {withArrow && <span className={styles.linkArrow}><ChevronRight/></span>}
      </span>
    </a>
  </LinkLayout>;

Link.defaultProps = {
  dataHook: 'menu-navigation-link',
  withArrow: false,
  disabled: false
};

Link.propTypes = {
  children: PropTypes.node,
  isActive: PropTypes.bool,
  withArrow: PropTypes.bool,
  badge: PropTypes.node,
  isDiminishedHover: PropTypes.bool,
  dataHook: PropTypes.string,
  disabled: PropTypes.bool
};

export default Link;
