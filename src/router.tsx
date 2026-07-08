import { createBrowserRouter, Navigate } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import { Home } from './pages/Home'
import { SubPage } from './pages/SubPage'
import { pageContent } from './data/navigation'

const subRoutes = Object.values(pageContent).map((content) => ({
  path: content.path.replace(/^\//, ''),
  element: <SubPage content={content} />,
}))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      ...subRoutes,
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])
