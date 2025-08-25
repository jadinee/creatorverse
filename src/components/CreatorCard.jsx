import { Link } from 'react-router-dom'

export default function CreatorCard({ creator }) {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        background: '#fafafa',
        marginBottom: '16px'
      }}
    >
      <h3>
        <Link to={`/creator/${creator.id}`} style={{ color: '#333' }}>
          {creator.name}
        </Link>
      </h3>
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noreferrer">
        Visit Channel
      </a>
    </div>
  )
}
