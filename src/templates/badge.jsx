import React from 'react';
import Badge from 'components/badge/index';
import Icon from '../../components/icon/index';
import Button from '../../components/button/button';
import Switch from '../../components/switch/switch';

export default class BadgeView extends React.Component {
  state = {
    show: true,
    count: 5,
  }
  decline = () => {
    const count = this.state.count - 1;
    if (count < 0) {
      this.setState({ count: 0 })
    } else {
      this.setState({count})
    }
  }
  increase = () => {
    const count = this.state.count + 1;
    this.setState({count})
  }
  onChange = (show) => {
    this.setState({show})
  }
  render() {
    const content = {
      width: 64,
      height: 64,
      borderRadius: 4,
      background: '#eee',
      display: 'inline-block',
    }
    return (
      <div id='main-container'>
        <h1>
          基本徽标展示
        </h1>
        <p style={{ marginBottom: '10px' }}>当 count 为 0 时，默认不显示，但是可以使用 showZero 修改为显示。</p>
        <Badge count={5}>
          <a href='#' style={content} />
        </Badge>
        <Badge showZero count={0}>
          <a href='#' style={content} />
        </Badge>
        <h1>
          独立使用
        </h1>
        <p style={{ marginBottom: '10px' }}>不包裹任何元素即是独立使用，可自定样式展现。</p>
        <Badge count={25} style={{ marginRight: '10px' }} />
        <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', borderColor: '#d9d9d9', marginLeft: '30px' }} />
        <Badge count={109} style={{ backgroundColor: '#87d068', marginLeft: '30px' }} />
        <h1>
          封顶数字
        </h1>
        <p style={{ marginBottom: '10px' }}>超过 overflowCount 的会显示为overflowCount+，默认的 overflowCount 为 99。</p>
        <Badge count={99} overflowCount='10'>
          <a href='#' style={content} />
        </Badge>
        <Badge count={200}>
          <a href='#' style={content} />
        </Badge>
        <Badge count={1000} overflowCount='999'>
          <a href='#' style={content} />
        </Badge>
        <h1>
          讨嫌的小红点
        </h1>
        <p style={{ marginBottom: '10px' }}>没有具体的数字。</p>
        <Badge>
          <Icon type='phone' />
        </Badge>
        <Badge dot>
          <Icon type='phone' />
        </Badge>
        <Badge dot>
          <a href='#'>一些通知</a>
        </Badge>
        <h1>可点击</h1>
        <p style={{ marginBottom: '10px' }}>用a标签包裹即可</p>
        <a href='#'>
          <Badge count={5}>
            <span className='example' />
          </Badge>
        </a>
        <h1>自定义标题</h1>
        <p style={{ marginBottom: '10px' }}>设置鼠标放在状态点上时显示的</p>
        <Badge title='DBox hover text' count={5}>
          <a href='#' style={content} />
        </Badge>
        <h1>状态点</h1>
        <span>用于表示状态的小圆点。</span>
        <div style={{ position: 'relative', marginLeft: '10px' }}>
          <Badge dot status='success' />
          <Badge dot status='error' style={{ marginLeft: '20px' }} />
          <Badge dot status='default' style={{ marginLeft: '40px' }} />
          <Badge dot status='processing' style={{ marginLeft: '60px' }} />
          <Badge dot status='warning' style={{ marginLeft: '80px' }} />
        </div>
        <div style={{ position: 'relative', marginTop: '20px', marginLeft: '10px' }}>
          <Badge dot status='success' text='成功' /><br />
          <Badge dot status='error' text='错误' style={{ top: '28px' }} /><br />
          <Badge dot status='default' text='未开始' style={{ top: '48px' }} /><br />
          <Badge dot status='processing' text='进行中' style={{ top: '68px' }} /><br />
          <Badge dot status='warning' text='异常' style={{ top: '88px' }} /><br />
        </div>
        <h1>动态</h1>
        <p style={{ marginBottom: '10px' }}>展示动态变化</p>
        <div style={{ marginBottom: '10px' }}>
          <Badge count={this.state.count}>
            <a href='#' style={content} />
          </Badge>
          <Button onClick={this.decline}>
            <Icon type='remove' />
          </Button>
          <Button onClick={this.increase}>
            <Icon type='plus' />
          </Button>
          <br />
        </div>
        <div>
          <Badge dot={this.state.show}>
            <a href='#' style={content} />
          </Badge>
          <Switch checked={this.state.show} onChange={this.onChange} />
        </div>
      </div>
    )
  }
 }
