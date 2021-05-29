import React from 'react';
import {shallow,ShallowWrapper} from 'enzyme'
import {Timer} from './Timer'
import {TimerButton} from '../TimerButton/TimerButton'
describe('Timer',() =>{
    let timer: ShallowWrapper
    beforeEach(() => (timer=shallow(<Timer/>)))
    it('Testing Timer Compnent',() =>{
        expect(timer.find('div').length).toEqual(1)
    })

    it('we have span',() =>{
      const container=shallow(<Timer/>)
      expect(container.find('span').length).toBeGreaterThanOrEqual(3)
    })

    it('we timer button components',() =>{
        const container=shallow(<Timer/>)
         expect(container.find(TimerButton).length).toBeGreaterThanOrEqual(3)  
    })
    it('SnapShot',() =>{
        const container=shallow(<Timer/>)
        expect(container).toMatchSnapshot()
    })
})
