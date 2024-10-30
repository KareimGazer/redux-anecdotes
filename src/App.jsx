import AnecdotesList from './components/AnecdotesList'
import AnecdoteCreator from './components/AnecdoteCreator'
import Filter from './components/Filter'
const App = () => {
  return (
    <div>
      <h1>Anecdotes</h1>
      <Filter/>
      <AnecdotesList/>
      <AnecdoteCreator/>
    </div>
  )
}

export default App