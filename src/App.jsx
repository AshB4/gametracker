import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddGamePage from './pages/AddGamePage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddGamePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
