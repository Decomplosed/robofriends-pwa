import * as actions from './actions'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants'

import configureStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

it('SHould create an action to search robots', () => {
  const text = 'wooo'
  const expectedAction = {
    type: CHANGE_SEARCHFIELD,
    payload: text
  }
  expect(actions.setSearchField(text)).toEqual(expectedAction)
})

it('handles requesting robots API', () => {
  
})