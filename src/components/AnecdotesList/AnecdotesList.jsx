import { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { vote, setAnecdotes } from "../../reducers/anecdoteReducer"
import Anecdote from "./Anecdote"

import { getAll } from '../../services/anecdotes.js'

const AnecdoteList = () => {

    useEffect(() => {
        const getInitAnecdotes = async () => {
            const initAnecdotes = await getAll()
            dispatch(setAnecdotes(initAnecdotes))
        }
        getInitAnecdotes()
    }, [])

    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter).toLowerCase()
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Your Feed</h2>
            {anecdotes.filter((anecdote) => anecdote.content.toLowerCase().includes(filter)).map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleVote={() => dispatch(vote(anecdote.id))}
                />
            )}
        </div>
    )
}

export default AnecdoteList