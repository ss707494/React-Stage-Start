/**
 * Created by Administrator on 2/16.
 */
import {handleActions, createActions} from 'redux-actions'
import Immutable from 'immutable';

const CHANGE_GLOBAL = 'CHANGE_GLOBAL'

export const initState = Immutable.fromJS({
  global_state: {}
})

export const global_actions = createActions(CHANGE_GLOBAL);

export const reducer_0 = handleActions({
  [CHANGE_GLOBAL]: (s, {payload:{key = '-1', value}}) => s.setIn([key], value)
}, initState);

