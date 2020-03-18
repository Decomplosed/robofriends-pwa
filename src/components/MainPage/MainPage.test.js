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

  wrapper = shallow(<MainPage {...mockProps} />)
})

it('renders MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot()
})

it('filters robots correctly', () => {
  const mockPropsFilters = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: 'a',
    isPending: false
  }
  wrapperFilters = shallow(<MainPage {...mockPropsFilters} />)

  expect(wrapper.instance().filterRobots([])).toEqual([])
  expect()
})