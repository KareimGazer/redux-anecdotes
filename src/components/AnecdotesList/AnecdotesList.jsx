import { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { vote, setAnecdotes } from "../../reducers/anecdoteReducer"
import Anecdote from "./Anecdote"

import AnecdotesService from '../../services/anecdotes.js'

const AnecdoteList = () => {

    useEffect(() => {
        const getInitAnecdotes = async () => {
            const initAnecdotes = await AnecdotesService.getAll()
            dispatch(setAnecdotes(initAnecdotes))
        }
        getInitAnecdotes()
    }, [])

    const handleVote = async (anecdote) => {
        try {
            await AnecdotesService.vote(anecdote)
            dispatch(vote(anecdote.id))
        }
        catch ({ message }) {
            console.log(message)
        }
    }

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
                    handleVote={handleVote}
                />
            )}
        </div>
    )
}

export default AnecdoteList