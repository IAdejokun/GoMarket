import './global.css'

import { QueryClient, QueryClientProvider} from '@tanstack/react-query' 

import { Router } from '../src/routes/sections';


//--------------------------------------

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes cache
      refetchOnWindowFocus: false,
    },
  },
});


function App() {
 

  return (
    <>
      <QueryClientProvider client={queryClient}>
          <Router />
      </QueryClientProvider>
    </>
  );
}

export default App
