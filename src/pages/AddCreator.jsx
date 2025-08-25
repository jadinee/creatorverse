import { useState } from 'react'
import { supabase } from '../client'
import { useNavigate } from 'react-router-dom'

export default function AddCreator() {
  const [form, setForm] = useState({ name: '', url: '', description: '', imageURL: '' })
  const nav = useNavigate()

  async function submit(e) {
    e.preventDefault()
    const { error } = await supabase.from('creators').insert([form])
    if (!error) nav('/')
  }

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
      <button type="submit">Create</button>
    </form>
  )
}
