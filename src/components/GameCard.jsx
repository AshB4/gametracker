function GameCard({ game, onDelete }) {
  return (
    <article className="game-card">
      <h3>{game.title}</h3>
      <p>
        <strong>Genre:</strong> {game.genre}
      </p>
      <p>
        <strong>Rating:</strong> {game.rating} / 5
      </p>
      <button type="button" className="danger-btn" onClick={() => onDelete(game.id)}>
        Delete
      </button>
    </article>
  )
}

export default GameCard
