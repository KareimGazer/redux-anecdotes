const Anecdote = ({anecdote, vote}) => {
    const { content, votes } = anecdote
    return (
        <div>
            <div>
                {content}
            </div>
            <div>
                has {votes}
                <button onClick={vote}>vote</button>
            </div>
        </div>
    )
}

export default Anecdote