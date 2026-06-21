
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dota2Page from "./pages/games/Dota2";
import MetroPage from "./pages/games/Metro";
import BlackRussiaPage from "./pages/games/BlackRussia";
import CS2Page from "./pages/games/CS2";
import PUBGPage from "./pages/games/PUBG";
import Standoff2Page from "./pages/games/Standoff2";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/games/dota2" element={<Dota2Page />} />
          <Route path="/games/metro" element={<MetroPage />} />
          <Route path="/games/blackrussia" element={<BlackRussiaPage />} />
          <Route path="/games/cs2" element={<CS2Page />} />
          <Route path="/games/pubg" element={<PUBGPage />} />
          <Route path="/games/standoff2" element={<Standoff2Page />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;