import React from 'react';
import {shallow } from 'enzyme';
import App from './App'
import {Timer} from './Components/Timer/Timer'

describe('App',() =>{
  it('It should be  an <div>',() =>{
    const container=shallow(<App/>)
    expect(container.find('div').length).toEqual(1)
  })
})

describe('App', () => {
  it('Checking head tag in App',() =>{
    const heading=shallow(<App/>)        
    expect(heading.find('h1').text()).toContain('Timer App')
  })

// Timer Comp
it('chekcing Timer in App',() =>{
  const timerComp=shallow(<App/>)
  expect(timerComp.containsMatchingElement(<Timer/>)).toEqual(true)
  })

})
