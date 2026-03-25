import { useEffect, useState } from 'react'
import GameCard from '../components/GameCard'
import Navbar from '../components/Navbar'
import { deleteGame, getGames } from '../services/gamesService'

function HomePage() {
  const [games, setGames] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadGames = async () => {
      try {
        const data = await getGames()
        setGames(data)
      } catch (loadError) {
        setError(loadError.message)
      } finally {
        setIsLoading(false)
      }
    }

    loadGames()
  }, [])

  const handleDelete = async (id) => {
    const previousGames = games
    setGames((currentGames) => currentGames.filter((game) => game.id !== id))

    try {
      await deleteGame(id)
    } catch (deleteError) {
      setGames(previousGames)
      setError(deleteError.message)
    }
  }

  return (
    <>
      <Navbar />
      <main className="page">
        <div className="page-header">
          <h2>My Games</h2>
          Add or Delete a game to see it appear or disappear from the list below.
        </div>

        {error && <p className="error">{error}</p>}
        {isLoading && <p>Loading games...</p>}

        {!isLoading && games.length === 0 && !error && (
          <p className="muted">No games yet. Go to Add Game to create your first one.</p>
        )}

        <section className="games-grid">
          {games.map((game) => (
            <GameCard key={game.id} game={game} onDelete={handleDelete} />
          ))}
        </section>
      </main>
    </>
  )
}

export default HomePage
