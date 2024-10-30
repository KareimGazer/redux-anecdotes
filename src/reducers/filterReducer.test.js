import deepFreeze from 'deep-freeze'
import filterReducer from './filterReducer'
import { describe, it, expect, beforeEach } from 'vitest'

let initialState = ''

describe('filterReducer', () => {
    beforeEach(() => {
        initialState = ''
        deepFreeze(initialState)
    })
    it('empty by default', () => {
        const newAction = {type: 'filter/setFilter', payload: ''}
        const newState = filterReducer(initialState, newAction)
        expect(newState).toEqual('')
    })
    it('sets the state to the correct filter', () => {
        const newSentence = 'if the'
        const newAction = { type: 'filter/setFilter', payload: newSentence }
        const newState = filterReducer(initialState, newAction)
        expect(newState).toEqual(newSentence)
    })
})