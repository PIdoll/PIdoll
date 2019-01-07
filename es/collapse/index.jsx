import React from 'react'
import RcCollapse from 'rc-collapse'
import classNames from 'classnames'

import animation from '../_util/openAnimation'
import './style/index.js'

export default class Collapse extends React.Component {
	static Panel = RcCollapse.Panel;

	static defaultProps = {
		prefixCls: 'idoll-collapse',
		bordered: true,
		openAnimation: { ...animation, appear() {} }
	};

	render() {
		const { prefixCls, className = '', bordered, bgColor } = this.props;
		const collapseClassName = classNames({
			[`${prefixCls}-borderless`]: !bordered,
			[`${prefixCls}-bgColor`]: bgColor
		}, className);
		return <RcCollapse {...this.props} className={collapseClassName} />;
	}
}
