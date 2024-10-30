import { it, describe, expect, beforeEach } from "vitest";

import anecdoteReducer, {asObject, anecdotesAtStart} from "./anecdoteReducer";
import deepFreeze from "deep-freeze";

let initialState = []

describe("anecdoteReducer", () => {
    beforeEach(() => {
        initialState = anecdotesAtStart.map(asObject)
        deepFreeze(initialState)
    })
    it('Creates a new anecdote with anecdotes/createAnecdote action', () => {
        const newAnecdoteContent = 'kisho is the best dev ever!'
        const newAction = { type: 'anecdotes/createAnecdote', payload: newAnecdoteContent }
        const newState = anecdoteReducer(initialState, newAction)
        expect(newState).toHaveLength(initialState.length + 1)
        expect(newState.map(anecdote => anecdote.content)).toContainEqual(newAction.payload)
    })

    it('Adds a new vote to the correct anecdote with anecdotes/vote action', () => {
        const testAnecdote = initialState[0]
        const { id, votes } = testAnecdote
        const newAction = { type: 'anecdotes/vote', payload: id }
        const newState = anecdoteReducer(initialState, newAction)
        expect(newState.find(anecdote => anecdote.id === id).votes).toEqual(votes + 1)
    })
})