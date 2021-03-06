import React from 'react';
import {Row, Col} from '../grid/index';
import Icon from '../icon';
import './style';

class PageView extends React.Component {
  render () {
    return (
      <Row type='flex' justify='space-between' align='middle' className='prevNextNav'>
        <Col>
          <a className='prevPage' href='/#/Components/General/Button'>
            <Icon type='left' className='prevIcon' />
            <span>上一页</span>
          </a>
        </Col>
        <Col>
          <a className='prevPage' href='/#/Components/General/Icon'>
            <span>下一页</span>
            <Icon type='right' className='prevIcon prevNext' />
          </a>
        </Col>
      </Row>
    )
  }
}
export default PageView;

