import React from 'react';
import {Radio} from 'components';
const RadioGroup = Radio.RadioGroup;
export default class NameRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '1'
    }
    this.onChange = this.onChange.bind(this)
  };
	onChange (e) {
		this.setState({
			value: e.target.value
		})
	}
  render() {
  return (
    <RadioGroup name='radioGroup' onChange={this.onChange} defaultValue={this.state.value}>
      <Radio value='1'>A</Radio>
      <Radio value='2'>B</Radio>
      <Radio value='3'>C</Radio>
      <Radio value='4'>D</Radio>
    </RadioGroup>
  )
}
}
