import React from 'react';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
          Página no encontrada
        </h2>
        
        <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto">
          La página que buscas no existe o ha sido movida.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => window.history.back()}
            variant="outline"
            className="rounded-full flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver atrás
          </Button>
          
          <Button 
            onClick={() => window.location.href = '/'}
            className="rounded-full flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
          >
            <Home className="w-4 h-4" />
            Inicio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
