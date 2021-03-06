用来代表用户，支持图片、图标或字符展示。

##### **基本用法**
通过设置size的值为large,small来控制avatar大小不设置默认为正常大小
```jsx
import {Avatar} from 'dbox-ui';
<div>
  <div>
    <Avatar style={{ marginRight: 47 }} size='large' icon='user' />
    <Avatar style={{ marginRight: 47 }} icon='user' />
    <Avatar style={{ marginRight: 47 }} size='small' icon='user' />
  </div>
  <br />
  <div>
    <Avatar style={{ marginRight: 47 }} shape='square' size='large' icon='user' />
    <Avatar style={{ marginRight: 47 }} shape='square' icon='user' />
    <Avatar style={{ marginRight: 47 }} shape='square' size='small' icon='user' />
  </div>
</div>
```

##### **基本类型**
可在avatar内设置文字，图片或者背景颜色
```jsx
import {Avatar} from 'dbox-ui';
<div>
  <Avatar style={{ marginRight: 47 }} icon='user' />
  <Avatar style={{ marginRight: 47 }}>USER</Avatar>
  <Avatar style={{ marginRight: 47 }} src='https://images.pexels.com/users/avatars/26735/lisa-fotios-223.jpeg?w=60&h=60&fit=crop&crop=faces' alt='DBox' />
  <Avatar style={{ backgroundColor: '#13B886', marginRight: 47 }} icon='user' />
</div>
```
##### **带徽标的头像**
用badge包裹avatar，常用来展示用户的消息数量
```jsx
import {Avatar, Badge} from 'dbox-ui';
<div>
  <span style={{ marginRight: 47 }}>
    <Badge count={2}><Avatar shape='square' icon='user' /></Badge>
  </span>
  <span>
    <Badge dot><Avatar shape='square' icon='user' /></Badge>
  </span>
</div>
```

##### **自动调整字符大小**
固定avatar大小，自动调整avatar内容文字大小
```jsx
import {Avatar} from 'dbox-ui';
<div>
  <Avatar style={{ marginRight: 47 }}>DBox</Avatar>
  <Avatar style={{ marginRight: 47 }}>Alvin</Avatar>
  <Avatar style={{ marginRight: 47 }}>react</Avatar>
</div>
```

##### **按钮调整字符大小**
通过按钮控制avatar内容文字大小或者用来切换用户
```jsx
import {Avatar, Button} from 'dbox-ui';
const UserList = ['Z', 'Alvin', 'Idoll', 'DBox'];
class AvatarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: UserList[0]
    }
    this.changeUser = this.changeUser.bind(this)
  };
  changeUser () {
    const index = UserList.indexOf(this.state.user);
    this.setState({
      user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0]
    });
  }
  render() {
    return (
      <div>
        <Avatar style={{ verticalAlign: 'middle' }}>
          {this.state.user}
        </Avatar>
        <Button type='primary' style={{ marginLeft: 16, verticalAlign: 'middle' }} onClick={this.changeUser}>
        Change
        </Button>
      </div>
    )
  }
}
<AvatarView />
```

##### **Avatar**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | 设置头像的图标类型，参考 `Icon` 组件 | string | - |
| shape | 指定头像的形状 | string | `circle` |
| size | 设置头像的大小 | sring('large', 'default','small') | `default` |
| src | 图片类头像的资源地址 | string | - |
| alt | 图片无法显示时的替代文本 | string | - |


```jsx noeditor
import {BackTop} from 'dbox-ui';
import AvatarView from '../prevPage/avatar';
<div>
  <BackTop visibilityHeight={20} style={{position: 'fixed', right: '50px'}}/>
  <AvatarView />
</div>
```
