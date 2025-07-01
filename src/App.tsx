import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/portfolio";
import Aboutus from "./pages/aboutus";
import Skor from "./pages/Projects/Skor"; 
import Morex from "./pages/Projects/morex";
import Bts from "./pages/Projects/bts";
import AAX from "./pages/Projects/AAX"; 
import GameDome from "./pages/Projects/Gamedome";
import ScrollToHash from "./components/ScrollToHash";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/portfolio/Skor" element={<Skor />} />
          <Route path="/portfolio/morex" element={<Morex />} />
          <Route path="/portfolio/bts" element={<Bts />} />
          <Route path="/portfolio/AAX" element={<AAX />} />
          <Route path="/portfolio/gamedome" element={<GameDome />} />
          

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
