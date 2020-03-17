import React from 'react'
import { shallow } from 'enzyme'
import CounterButton from './CounterButton'

it('expect to render CounterButton component', () => {
  const mockColor = 'red'
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot()
})
