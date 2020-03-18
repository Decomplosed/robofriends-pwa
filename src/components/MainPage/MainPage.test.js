import React from 'react'
import { shallow } from 'enzyme'
import MainPage from './MainPage'

let wrapper

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
})

it('expect to render App component', () => {
  const mockStore = {
    robots: [],
    searchField: ''
  }
  expect(shallow(<App store={mockStore} />)).toMatchSnapshot()
})
