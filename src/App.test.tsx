import React from 'react';
import {shallow } from 'enzyme';
import App from './App'


describe('App',() =>{
  it('It should be  an <div>',() =>{
    const container=shallow(<App/>)
    expect(container.find('div').length).toEqual(1)
  })
})
