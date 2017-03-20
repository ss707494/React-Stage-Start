/**
 * Created by Administrator on 3/1.
 */
import {createActions, handleActions} from 'redux-actions'
import Immutable from 'immutable';

export const name = 'todo'

const initState = Immutable.fromJS({
  showMoreIntro: false,
})

export const CHANGE_OPTION = 'CHANGE_OPTION';

export const actions = createActions({
  },
  CHANGE_OPTION
)


export const reducer = handleActions({
  [CHANGE_OPTION]: (s, {payload:{key = '-1', value}}) => s.mergeIn([key], value),
}, initState);

