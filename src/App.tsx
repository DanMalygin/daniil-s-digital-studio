// Import the toast notification components.
// These show small popup messages like “Saved!” or “Error!” anywhere in the app.
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

// Import the tooltip provider.
// This makes tooltips work everywhere in your app when you hover on elements.
import { TooltipProvider } from "@/components/ui/tooltip";

// Import React Query tools.
// QueryClient manages caching and fetching of API data.
// QueryClientProvider makes React Query available to all components.
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Import React Router tools.
// BrowserRouter enables URL-based navigation.
// Routes is a container for all your routes.
// Route defines a single page/URL mapping.
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your actual pages.
// Index = home page
// NotFound = 404 page shown when no route matches
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create a new React Query client.
// This object stores cached API responses and handles refetching, errors, etc.
const queryClient = new QueryClient();

// The main App component — the root of your entire React application.
const App = () => (
  // Provide the React Query client to the whole app.
  // Now any component can use useQuery(), useMutation(), etc.
  <QueryClientProvider client={queryClient}>

    {/* TooltipProvider makes tooltips consistent and available everywhere */}
    <TooltipProvider>

      {/* These two components show toast notifications when triggered */}
      <Toaster />
      <Sonner />

      {/* BrowserRouter enables routing (switching pages based on the URL) */}
      <BrowserRouter>

        {/* Routes contains all possible pages in the app */}
        <Routes>

          {/* The home page.
              When the URL is exactly "/", show the <Index /> component. */}
          <Route path="/" element={<Index />} />

          {/* A catch-all route.
              If the user goes to any unknown URL ("/random", "/abc", etc),
              show the NotFound page instead of breaking the website. */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Export the App component so that main.tsx can render it.
export default App;


//PROVIDER TREE (The hierarchy of components above):
//Each outer layer provides some kind of global functionality 
// to everything inside it.

/* KEY IDEA: The provider tree is built according to who needs what.

The more global a feature is, the higher it is in the hierarchy.

Example (real meaning):

React Query Provider
→ All pages and components use API data → goes at the top.

Tooltip Provider
→ Only UI elements need tooltips → goes inside.

Toasters
→ They need to appear visually above the entire app → placed near the top of the UI area.

BrowserRouter
→ Only the app routing needs it → placed around pages.

Routes
→ Only the pages need it → placed inside BrowserRouter.

This creates a “nested responsibility” structure. */