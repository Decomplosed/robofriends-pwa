import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Card from './Card'

expect(shallow(<Card />).length.toEqual(1)
