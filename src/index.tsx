import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
} from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './app/store';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store} >      
        <BrowserRouter>
        <Toaster />
          <App />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
   </React.StrictMode>
);
