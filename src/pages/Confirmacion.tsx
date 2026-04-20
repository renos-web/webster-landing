export default function Confirmacion() {
  return (
    <div 
      className="min-h-screen bg-black text-white flex items-center justify-center px-6"
      style={{
        backgroundImage: 'url(/images/fondo-estático.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-4xl w-full">
        {/* Contenedor principal con efecto Liquid Glass */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12">
          
          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-center mb-8">
            Tu llamada está confirmada
          </h1>

          <p className="text-lg md:text-xl text-gray-200 text-center mb-12 max-w-3xl mx-auto">
            En la llamada vamos a revisar qué necesita tu negocio y te voy a mostrar
            un ejemplo claro de cómo podría verse funcionando con Webster.
          </p>

          {/* Sección: Qué vas a ver exactamente */}
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Qué vas a ver exactamente
            </h2>

            <ul className="space-y-4 text-gray-200 text-lg">
              <li>• Qué necesita tu negocio para automatizar mejor sus ventas</li>
              <li>• Qué tipo de sistema tendría sentido implementar primero</li>
              <li>• Un ejemplo de cómo se vería funcionando con Webster</li>
            </ul>
          </div>

          {/* Sección: Antes de la llamada, mira esto */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Antes de la llamada, mira esto
            </h2>

            <div className="overflow-hidden rounded-2xl border border-white/20 backdrop-blur-sm bg-white/5">
              <div className="aspect-video w-full bg-neutral-900/50 flex items-center justify-center text-gray-300">
                Aquí va tu video
              </div>
            </div>
          </div>

          {/* Sección: Caso real */}
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Caso real
            </h2>

            <p className="text-gray-200 text-lg leading-relaxed">
              Un cliente que ya estaba recibiendo mensajes y oportunidades, pero no
              tenía un seguimiento claro, logró ordenar su proceso comercial y dar una
              mejor experiencia al cliente con una solución adaptada a su negocio.
            </p>
          </div>

          {/* Cierre */}
          <p className="text-gray-300 text-center text-lg mt-12">
            Nos vemos en la llamada.
          </p>
        </div>
      </div>
    </div>
  );
}