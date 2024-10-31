import AnecdotesList from './components/AnecdotesList'
import AnecdoteCreator from './components/AnecdoteCreator'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
  return (
    <div>
      <Notification/>
      <h1>Anecdotes</h1>
      <Filter/>
      <AnecdotesList/>
      <AnecdoteCreator/>
    </div>
  )
}

export default App