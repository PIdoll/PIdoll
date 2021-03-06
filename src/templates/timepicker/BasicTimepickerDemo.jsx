import React from 'react';
import TimePicker from 'components/time-picker/index';

export default class BasicTimepickerDemo extends React.Component {
  onChange = (time, timeString) => {
    console.log(time, timeString);
  }
  render() {
    return (
      <TimePicker placeholder='选择时间' minuteStep={15} secondStep={10} onChange={this.onChange} />
    )
  }
}
