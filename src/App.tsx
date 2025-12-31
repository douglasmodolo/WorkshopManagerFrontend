import { LayoutDashboard, ClipboardList, Package, Users, Settings } from 'lucide-react';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6 text-xl font-bold border-b border-slate-800">
          WorkshopManager
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-blue-600">
            <LayoutDashboard size={20} /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors">
            <ClipboardList size={20} /> Ordens de Serviço
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors">
            <Package size={20} /> Estoque
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors">
            <Users size={20} /> Clientes
          </a>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors">
            <Settings size={20} /> Configurações
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8">
          <h2 className="text-lg font-semibold text-gray-700">Dashboard</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">Oficina Central</span>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
              AD
            </div>
          </div>
        </header>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cards de exemplo */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-sm text-gray-500 uppercase font-bold">OS Abertas</p>
              <h3 className="text-3xl font-bold mt-2">12</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-sm text-gray-500 uppercase font-bold">Faturamento (Mês)</p>
              <h3 className="text-3xl font-bold mt-2">R$ 15.420</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-sm text-gray-500 uppercase font-bold">Aguardando Peças</p>
              <h3 className="text-3xl font-bold mt-2 text-orange-500">5</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;