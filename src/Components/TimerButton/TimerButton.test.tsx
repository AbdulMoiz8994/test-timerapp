import React from 'react'
import {shallow, ShallowWrapper} from 'enzyme'
import {TimerButton} from './TimerButton'



describe('Timer Comp',() =>{
    it('Auth To Div',() =>{
        const container=shallow(<TimerButton buttonAction={jest.fn} buttonValue={""}/>)
        expect(container.find('div').length).toEqual(1)
    })

    it("Button",() =>{
        const container:ShallowWrapper=shallow(<TimerButton buttonAction={jest.fn} buttonValue={""}/>)
       expect(container.find('button').length).toBe(1)
    })
    it("Button SnapShot",() =>{
        const contianer=shallow(<TimerButton buttonAction={jest.fn} buttonValue={""}/>)
        expect(contianer).toMatchSnapshot()
    })
})

