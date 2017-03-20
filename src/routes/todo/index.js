/**
 * Created by Administrator on 2/18.
 */
import React from 'react'
import './style.scss'
import {handleClassForAsync} from '../../store/reducers'
import {name, reducer, actions} from './action';

class TestDemo extends React.Component {

  componentWillMount() {
  }

  render() {
    const props = this.props;
    return <div styleName="todo">
      <header styleName="header">todos</header>
      <section styleName="box">
        <div styleName="topInput">
          <label htmlFor=""></label>
          <input type="text" placeholder="What needs to be done?"/>
        </div>
        <div styleName="list">
          <input type="checkbox"/>
          <label>sdf</label>
        </div>
        <div styleName="list">
          <input type="checkbox"/>
          <label>sdf</label>
        </div>
      </section>
    </div>
  }
}

export default (store) =>  handleClassForAsync(store)({name, reducer, actions})(TestDemo)

