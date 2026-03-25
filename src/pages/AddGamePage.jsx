import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GameForm from '../components/GameForm'
import Navbar from '../components/Navbar'
import { addGame } from '../services/gamesService'

function AddGamePage() {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (gameData) => {
    setError('')
    setIsSubmitting(true)

    try {
      await addGame(gameData)
      navigate('/')
    } catch (submitError) {
      setError(submitError.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="page">
        <div className="page-header">
          <h2>Add Game</h2>
          <p className="muted">Save a new favorite game</p>
        </div>

        {error && <p className="error">{error}</p>}

        <GameForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      </main>
    </>
  )
}

export default AddGamePage
