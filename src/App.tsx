import { Toaster } from "@/components/ui/toaster";
import { Zap, MessageCircle, Paintbrush, Gauge } from 'lucide-react';
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importar componente principal desde components
import Index from "./components/Index";
import NotFound from "./components/NotFound";
import Confirmacion from "./pages/Confirmacion";
import Privacidad from "./pages/Privacidad";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/confirmacion" element={<Confirmacion />} />
          <Route path="/privacidad" element={<Privacidad />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
