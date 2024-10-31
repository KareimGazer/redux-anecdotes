import { createSlice } from "@reduxjs/toolkit"
import anecdotesService from '../services/anecdotes'

export const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

export const asObject = (anecdoteContent) => {
  return {
    content: anecdoteContent,
    id: getId(),
    votes: 0
  }
}

// const initialState = anecdotesAtStart.map(asObject)

const anecdotesSlice = createSlice({
  name: 'anecdotes', // used to prefix the action type value
  initialState: [],
  reducers: {
    addVote(state, action) {
      return state.map(anecdote => anecdote.id === action.payload ? { ...anecdote, votes: anecdote.votes + 1 } : anecdote)
    },
    setAnecdote(state, action) {
      return [...state, action.payload]
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { addVote, setAnecdote, setAnecdotes } = anecdotesSlice.actions

export const getInitAnecdotes = () => {
  return async dispatch => {
    const initAnecdotes = await anecdotesService.getAll()
    dispatch(setAnecdotes(initAnecdotes))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.create(content)
    dispatch(setAnecdote(newAnecdote))
  }
}

export const vote = (anecdote) => {
  return async dispatch => {
    await anecdotesService.vote(anecdote)
    dispatch(addVote(anecdote.id))
  }
}

export default anecdotesSlice.reducer
