const Anecdote = ({anecdote, handleVote}) => {
    const { content, votes } = anecdote
    return (
        <div>
            <div>
                {content}
            </div>
            <div>
                has {votes}
                <button onClick={() => handleVote(anecdote)}>vote</button>
            </div>
        </div>
    )
}

export default Anecdote