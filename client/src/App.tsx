import { useEffect, useState } from 'react'
import './App.css'

type ApiMessage = { message: string }

function App() {
  const [backend, setBackend] = useState<string>('Connecting…')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => {
        if (!res.ok) throw new Error(`Status ${res.status}`)
        return res.json() as Promise<ApiMessage>
      })
      .then((data) => setBackend(data.message))
      .catch((err: unknown) =>
        setError(err instanceof Error ? err.message : String(err)),
      )
  }, [])

  return (
    <main className="app">
      <h1>Full Stack Starter</h1>
      <p className="subtitle">
        React + Vite frontend talking to an Express + TypeScript backend.
      </p>
      <section className="card">
        <h2>🔌 Backend status</h2>
        {error ? (
          <p className="error">Could not reach the backend: {error}</p>
        ) : (
          <p>{backend}</p>
        )}
      </section>
    </main>
  )
}

export default App
