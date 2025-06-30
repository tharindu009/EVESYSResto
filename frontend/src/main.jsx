import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { SnackbarProvider } from 'notistack'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30000,
    }
  }
})

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
        <SnackbarProvider autoHideDuration={3000}>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </SnackbarProvider>
      </Provider>
    </StrictMode>
  </BrowserRouter>,
)
