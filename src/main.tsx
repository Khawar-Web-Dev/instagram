import { StrictMode } from 'react'
import { router } from './routes/routes.tsx'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
