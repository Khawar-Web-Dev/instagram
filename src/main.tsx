import { StrictMode } from 'react'
import store from './utils/store.ts';
import { Provider } from "react-redux";
import { router } from './pages/routes.tsx'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
