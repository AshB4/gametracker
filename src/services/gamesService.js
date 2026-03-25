const SUPABASE_URL = import.meta.env.SUPABASE_URL
const SUPABASE_API_KEY = import.meta.env.SUPABASE_API_KEY

if (!SUPABASE_URL || !SUPABASE_API_KEY) {
  throw new Error('Missing Supabase environment variables.')
}

const GAMES_ENDPOINT = `${SUPABASE_URL}/rest/v1/games`

const defaultHeaders = {
  apikey: SUPABASE_API_KEY,
  Authorization: `Bearer ${SUPABASE_API_KEY}`,
  'Content-Type': 'application/json',
}

async function request(url, options = {}) {
  const response = await fetch(url, options)

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(errorText || 'Supabase request failed.')
  }

  if (response.status === 204) {
    return null
  }

  return response.json()
}

export async function getGames() {
  return request(`${GAMES_ENDPOINT}?select=*&order=created_at.desc`, {
    headers: defaultHeaders,
  })
}

export async function addGame(game) {
  const rows = await request(GAMES_ENDPOINT, {
    method: 'POST',
    headers: {
      ...defaultHeaders,
      Prefer: 'return=representation',
    },
    body: JSON.stringify(game),
  })

  return rows[0]
}

export async function deleteGame(id) {
  return request(`${GAMES_ENDPOINT}?id=eq.${id}`, {
    method: 'DELETE',
    headers: {
      ...defaultHeaders,
      Prefer: 'return=minimal',
    },
  })
}
