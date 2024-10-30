import axios from "axios";
import { SERVER_API_URL } from '../utils/config'

const anecdotesURL = `${SERVER_API_URL}/anecdotes`

const getAll = async () => {
    const response = await axios.get(anecdotesURL)
    return response.data
}

const create = async (content) => {
    const newAnecdote = {content, votes: 0}
    const response = await axios.post(anecdotesURL, newAnecdote)
    return response.data
}

const vote = async (anecdote) => {
    const response = await axios.put(`${anecdotesURL}/${anecdote.id}`, {...anecdote, votes: anecdote.votes + 1})
    return response.data
}

export default { getAll, create, vote }