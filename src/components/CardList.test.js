import React from 'react'
import { shallow } from 'enzyme'
import CardList from './CardList'

it('expect to render Card component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      username: 'John Doe',
      email: 'johns@gmail.com'
    }
  ]
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot()
})
