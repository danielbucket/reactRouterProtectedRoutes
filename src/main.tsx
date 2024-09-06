import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, CreateBrowserRouter, RouterProvider } from 'react-router-dom'

import AuthProvider from './components/AuthProvider.tsx'
import ProtectedRoute from './components/ProtectedRoute.tsx'
import HomePage from './pages/HomePage.tsx'
import SignInPage from './pages/SignInPage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import App from './App.tsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
    <ProtectedRoute>
      <HomePage />
    </ProtectedRoute>
  ),
  },
  {
    path: '/signin',
    element: <SignInPage />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider isSignedIn={false}>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
