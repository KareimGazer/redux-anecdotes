import axios from "axios";
import { SERVER_API_URL } from '../utils/config'

const anecdotesURL = `${SERVER_API_URL}/anecdotes`

export const getAll = async () => {
    const response = await axios.get(anecdotesURL)
    return response.data
}

