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
    robots: [
      {
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
      }
    ],
    searchField: 'john',
    isPending: false
  }
  const wrapperFilters = shallow(<MainPage {...mockPropsFilters} />)

  expect(wrapperFilters.instance().filterRobots()).toEqual([
    {
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }
  ])
})

it('filters robots correctly if empty', () => {
  const mockPropsFiltersIfEmpty = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
      }
    ],
    searchField: 'a',
    isPending: false
  }
  const wrapperFiltersIfEmpty = shallow(
    <MainPage {...mockPropsFiltersIfEmpty} />
  )

  expect(wrapperFiltersIfEmpty.instance().filterRobots()).toEqual([])
})
