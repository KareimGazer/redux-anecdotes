import { useSelector, useDispatch } from "react-redux"
import { vote } from "../../reducers/anecdoteReducer"
import Anecdote from "./Anecdote"

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    vote={() => dispatch(vote(anecdote.id))}
                />
            )}
        </div>
    )
}

export default AnecdoteList