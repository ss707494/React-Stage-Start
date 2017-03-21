/**
 * Created by Administrator on 3/1.
 */
import {createActions, handleActions} from 'redux-actions'
import Immutable from 'immutable';
import {Map} from 'immutable';
import {TODO} from './const'

const {showState: {all, active}} = TODO

export const name = 'todo'

const initState = Immutable.fromJS({
  list: [],
  showState: all,
})

export const CHANGE_OPTION = 'CHANGE_OPTION'
export const SAVE = 'SAVE'
export const CHANGE_STATE = 'CHANGE_STATE'
export const TOGGLE = 'TOGGLE'

export const actions = createActions({},
  CHANGE_OPTION, SAVE, CHANGE_STATE,
  TOGGLE
)


export const reducer = handleActions({
  [CHANGE_OPTION]: (s, {payload:{key = '-1', value}}) => s.setIn([key], value),
  [SAVE]: (s, {payload}) => s.updateIn(['list'], list => list.unshift(Map({
    id: new Date().getMilliseconds(),
    text: payload,
    state: active
  }))),
  [CHANGE_STATE]: (s, {payload}) => s.updateIn(['list'], list => list.map(e => e.get('id') !== payload.id ? e : e.merge(Map(payload)))),
  [TOGGLE]: (s, {payload}) => s.updateIn(['list'], list => list.map(e => e.set('state', payload))),
}, initState);

