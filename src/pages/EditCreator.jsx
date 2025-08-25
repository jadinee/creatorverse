import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from '../client'

export default function EditCreator() {
  const { id } = useParams()
  const nav = useNavigate()
  const [form, setForm] = useState({ name: '', url: '', description: '', imageURL: '' })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const { data } = await supabase.from('creators').select('*').eq('id', id).single()
      if (data) {
        setForm({
          name: data.name || '',
          url: data.url || '',
          description: data.description || '',
          imageURL: data.imageURL || ''
        })
      }
      setLoading(false)
    })()
  }, [id])

  async function submit(e) {
    e.preventDefault()
    await supabase.from('creators').update(form).eq('id', id)
    nav(`/creator/${id}`)
  }

  if (loading) return <p>Loading...</p>

  return (
    <form onSubmit={submit} style={{ display: 'grid', gap: 8, maxWidth: 420 }}>
      <input
        placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        placeholder="URL"
        value={form.url}
        onChange={e => setForm({ ...form, url: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={form.description}
        onChange={e => setForm({ ...form, description: e.target.value })}
        required
      />
      <input
        placeholder="Image URL (optional)"
        value={form.imageURL}
        onChange={e => setForm({ ...form, imageURL: e.target.value })}
      />
      <button type="submit">Save</button>
      <button
        type="button"
        onClick={async () => {
          await supabase.from('creators').delete().eq('id', id)
          nav('/')
        }}
        style={{ marginTop: 12 }}
      >
        Delete
      </button>
    </form>
  )
}
