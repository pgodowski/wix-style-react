import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Add from '../new-icons/Add';
import Text from 'wix-style-react/Text';
import styles from './AddNewItem.scss';

const textWitElipsis = children => (
  <div data-hook="text-with-ellipses">
    <Text style={{color: '#3899ec'}} dataHook="addnewitem-text" elipsis>{children}</Text>
  </div>
);

class AddNewItem extends Component {
  constructor() {
    super();
    this.state = {
      height: null
    };
    this.height = null;
  }
  static displayName = 'AddNewItem';
  static propTypes = {

    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.string]),

    disabled: PropTypes.bool,

    theme: PropTypes.oneOf(['dashes', 'plain', 'filled']),

    alignItems: PropTypes.oneOf(['center', 'right', 'left']),

    onClick: PropTypes.func,
    /** used for testing */
    dataHook: PropTypes.string
  }

  static defaultProps = {
    theme: 'dashes',
    alignItems: 'center'
  }

  componentDidMount() {
    const {offsetHeight} = this.height;
    if (offsetHeight) {
      console.log(offsetHeight);
      this.setState({height: offsetHeight});
    }
  }

  renderText = () => {
    const {children} = this.props;
    if (!children) {
      return null;
    }
    if (typeof children === 'string') {
      return textWitElipsis(children);
    }
    return <div data-hook="addnewitem-children">{children}</div>;
  }

  render() {
    const {dataHook, onClick, disabled, theme, alignItems} = this.props;
    const {height} = this.state;
    const heightStyle = height && height < 120 ? styles.row : null;
    return (
      <div ref={x => this.height = x} className={classnames(styles[theme], styles[alignItems], disabled ? styles.disabled : '')} onClick={disabled ? null : onClick} data-hook={dataHook}>
        <div className={classnames(heightStyle, styles.container)}>
          <Add className={styles.icon} data-hook="addnewitem-icon"/>
          {this.renderText()}
        </div>
      </div>
    );
  }
}
export default AddNewItem;
