import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './style'

function Header(props) {
  	const { span, children, className, style } = props;
    const classes = classNames({
      'idoll-layout-header': 'idoll-layout-header',
      [`idoll-layout-header-${span}`]: span
    }, className);
  	return <div {...props} className={classes} style={style} >{children}</div>;
}

Header.propTypes = {
  span: PropTypes.number,
  children: PropTypes.node,
  style: PropTypes.object
};

export default Header;

