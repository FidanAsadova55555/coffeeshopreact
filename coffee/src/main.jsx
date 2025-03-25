import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/style.scss'
import App from './App.jsx'
import '@/utils/reacti18.jsx'
import { CookiesProvider } from 'react-cookie'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient({
  
  defaultOptions: {
      queries: {
          refetchOnWindowFocus: false,
          retry: false
      }
  }
  
});
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookiesProvider>
    <QueryClientProvider client={queryClient}>
      <App/>
    </QueryClientProvider>
    </CookiesProvider>
  </StrictMode>,
)
