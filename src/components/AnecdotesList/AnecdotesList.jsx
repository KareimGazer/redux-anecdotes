import { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { vote, getInitAnecdotes } from "../../reducers/anecdoteReducer"
import Anecdote from "./Anecdote"
import { notify } from "../../reducers/notificationReducer"

const AnecdoteList = () => {

    useEffect(() => {
        dispatch(getInitAnecdotes())
    }, [])

    const handleVote = async (anecdote) => {
        dispatch(vote(anecdote))
        dispatch(notify(`Voted for: **${anecdote.content}**`, 5))
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