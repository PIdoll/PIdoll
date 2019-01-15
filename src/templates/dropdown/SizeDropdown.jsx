import React from 'react';
import {Dropdown, Menu} from 'components'
import { MenuItem } from 'components/menu';
const DropdownButton = Dropdown.DropdownButton;
const menu2 = (
  <Menu theme='light' onClick={handleMenu1Click}>
    <MenuItem key='2.1'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='2.2'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='2.3'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
  </Menu>
);
function handleMenu1Click(e) {
  console.info('click', e);
};
function handleButtonClick(e) {
  console.info('click left button', e);
};
export default class SizeDropdown extends React.Component {
  render () {
    return (
      <div>
        <DropdownButton size='small' overlay={menu2} trigger={['hover']}>
          默认菜单
        </DropdownButton>
        <DropdownButton overlay={menu2} trigger={['click']} onClick={handleButtonClick}>
          默认菜单
        </DropdownButton>
        <DropdownButton visible size='large' overlay={menu2} trigger={['hover']}>
          默认菜单
        </DropdownButton>
      </div>
    )
  }
}
