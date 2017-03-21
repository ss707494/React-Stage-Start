/**
 * Created by Administrator on 2/18.
 */
import React from 'react'
import './style.scss'
import {handleClassForAsync} from '../../store/reducers'
import {name, reducer, actions} from './action';
import {TODO} from './const';

const {showState: {all, active, complete}} = TODO

class TestDemo extends React.Component {

  save = id => e => {
    if (e.key !== 'Enter' && e.type !== 'blur') return
    const {actions: {save, changeState}} = this.props;
    if (id) {
      changeState({
        id, isEdit: false,
        text: e.target.value
      })
    }else {
      save(e.target.value || '')
      e.target.value = ''
    }
  }

  render() {
    const props = this.props,
      {list, showState} = props.todo.toJSON(),
      {changeOption, changeState, toggle} = props.actions,
      _num = list.reduce((res, e) => e.state === active ? {...res, active: res.active + 1} : {...res, complete: res.complete + 1}, {active: 0, complete: 0}),
      _leftItems = _num.active,
      _com = _num.complete

    return <div styleName="todo">
      <header styleName="header">todos</header>
      <section styleName="box">
        <div styleName="topInput">
          <label styleName={_leftItems ? '' : "noLeft"} onClick={e => toggle(_leftItems ? complete : active)} htmlFor=""></label>
          <input styleName="input-text" id="newTodo" type="text" placeholder="What needs to be done?"
                 onKeyUp={this.save()}
          />
        </div>
        {
          list.filter(e => showState === all ? '1' : e.state === showState)
            .map(e => e.isEdit
              ? <div key={e.id} styleName="list">
                <div styleName="spa"></div>
                <input styleName="input-text" type="text" onBlur={this.save(e.id)} onKeyUp={this.save(e.id)} defaultValue={e.text} />
              </div>
              : <div key={e.id} styleName="list">
                <input styleName="check" onClick={x => changeState({id: e.id, state: (e.state % 2 + 1)})}
                       type="checkbox" checked={e.state === complete}/>
                <label onDoubleClick={x => changeState({id: e.id, isEdit: true})}
                       styleName={e.state === complete ? 'complete' : ''}>{e.text}</label>
              </div>
            )
        }
        {
          list.length ? (
              <div styleName="foot">
                <div styleName="left">{_leftItems} items left</div>
                <div styleName="choose">
                  <a onClick={e => changeOption({key: 'showState', value: all})}
                     styleName={showState === all ? 'act' : ''}>All</a>
                  <a onClick={e => changeOption({key: 'showState', value: active})}
                     styleName={showState === active ? 'act' : ''}>Active</a>
                  <a onClick={e => changeOption({key: 'showState', value: complete})}
                     styleName={showState === complete ? 'act' : ''}>Completed</a>
                </div>
                {_com ? <div>Clear completed</div> : <div> </div> }
              </div>
            ) : ''
        }
      </section>
    </div>
  }
}

export default (store) => handleClassForAsync(store)({name, reducer, actions})(TestDemo)

