import React from 'react'
import { shallow } from 'enzyme'
import CardList from './CardList'

it('expect to render Card component', () => {
  expect(shallow(<CardList />)).toMatchSnapshot()
})
