import { useRoutes, Link } from 'react-router-dom'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'

function App() {
  const routes = useRoutes([
    { path: '/', element: <ShowCreators /> },
    { path: '/creator/:id', element: <ViewCreator /> },
    { path: '/new', element: <AddCreator /> },
    { path: '/edit/:id', element: <EditCreator /> }
  ])

  return (
    <div>
      <header>
        <h1><Link to="/">Creatorverse</Link></h1>
        <nav>
          <Link to="/new">Add Creator</Link>
        </nav>
      </header>
      {routes}
    </div>
  )
}

export default App
