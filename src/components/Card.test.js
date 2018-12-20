import React from "react"
import { shallow, mount, render } from 'enzyme'
import Card from './Card'

it('will render', () => {
  expect(shallow(<Card />).length).toEqual(1)
})