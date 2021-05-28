import React from 'react';
import {shallow,ShallowWrapper} from 'enzyme'
import {Timer} from './Timer'

describe('Timer',() =>{
    let timer: ShallowWrapper
    beforeEach(() => (timer=shallow(<Timer/>)))
    it('Testing Timer Compnent',() =>{
        expect(timer.find('div').length).toEqual(1)
    })
})
