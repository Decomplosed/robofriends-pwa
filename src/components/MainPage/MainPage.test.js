import React from 'react'
import { shallow } from 'enzyme'
import MainPage from './MainPage'

it('expect to render App component', () => {
  const mockStore = {
    robots: [],
    searchField: ''
  }
  expect(shallow(<App store={mockStore} />)).toMatchSnapshot()
})
