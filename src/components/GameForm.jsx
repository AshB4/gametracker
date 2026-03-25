import { useState } from 'react'

function GameForm({ onSubmit, isSubmitting }) {
  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState('')
  const [rating, setRating] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const trimmedTitle = title.trim()
    const trimmedGenre = genre.trim()

    if (!trimmedTitle || !trimmedGenre || !rating) {
      return
    }

    await onSubmit({
      title: trimmedTitle,
      genre: trimmedGenre,
      rating: Number(rating),
    })

    setTitle('')
    setGenre('')
    setRating('')
  }

  return (
    <form className="game-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Ex: Elden Ring"
          required
        />
      </div>

      <div className="field">
        <label htmlFor="genre">Genre</label>
        <input
          id="genre"
          type="text"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
          placeholder="Ex: Action RPG"
          required
        />
      </div>

      <div className="field">
        <label htmlFor="rating">Rating</label>
        <select
          id="rating"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          required
        >
          <option value="">Choose a rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <button type="submit" className="primary-btn" disabled={isSubmitting}>
        {isSubmitting ? 'Saving...' : 'Save Game'}
      </button>
    </form>
  )
}

export default GameForm
