import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import AnecdotesService from '../services/anecdotes'

const AnecdoteCreator = () => {
    const dispatch = useDispatch()
    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        try {
            const newAnecdote = await AnecdotesService.create(content)
            dispatch(createAnecdote(newAnecdote))
        }
        catch ({message}) {
            console.log(message)
        }
        
    }
    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name='anecdote'/></div>
                <button>create</button>
            </form>
        </div>
    )
}

export default AnecdoteCreator