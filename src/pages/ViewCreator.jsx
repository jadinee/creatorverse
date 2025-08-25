import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from '../client'

export default function ViewCreator() {
  const { id } = useParams()
  const [creator, setCreator] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const { data } = await supabase.from('creators').select('*').eq('id', id).single()
      setCreator(data || null)
      setLoading(false)
    })()
  }, [id])

  if (loading) return <p>Loading...</p>
  if (!creator) return <p>Not found.</p>

  return (
    <div>
      <h2>{creator.name}</h2>
      <p>{creator.description}</p>
      <p>
        <a href={creator.url} target="_blank" rel="noreferrer">Visit channel</a>
      </p>
      <p><Link to="/">Back</Link></p>
      <p><Link to={`/edit/${id}`}>Edit</Link></p>
    </div>
  )
}
