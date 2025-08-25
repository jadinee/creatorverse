import { useEffect, useState } from 'react'
import { supabase } from '../client'
import CreatorCard from '../components/CreatorCard'
import { Link } from 'react-router-dom'

export default function ShowCreators() {
  const [creators, setCreators] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .order('id', { ascending: true })
      if (!error) setCreators(data || [])
      setLoading(false)
    })()
  }, [])

  if (loading) return <p>Loading...</p>
  if (creators.length === 0)
    return (
      <div>
        <p>No creators yet.</p>
        <Link to="/new">Add one</Link>
      </div>
    )

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px,1fr))', gap: 12 }}>
      {creators.map((c) => (
        <CreatorCard key={c.id} creator={c} />
      ))}
    </div>
  )
}
