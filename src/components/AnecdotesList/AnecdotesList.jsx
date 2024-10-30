import { useSelector, useDispatch } from "react-redux"
import { vote } from "../../reducers/anecdoteReducer"
import Anecdote from "./Anecdote"

const AnecdoteList = () => {
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