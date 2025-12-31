import { 
  LayoutDashboard, 
  ClipboardList, 
  Package, 
  Users, 
  Settings, 
  Wrench, 
  CarFront 
} from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col">
      <div className="p-6 text-xl font-bold border-b border-slate-800">
        WorkshopManager
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {/* Seção Principal */}
        <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-blue-600 transition-colors">
          <LayoutDashboard size={20} /> Dashboard
        </a>
        
        <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors">
          <ClipboardList size={20} /> Ordens de Serviço
        </a>

        {/* Divisor: Cadastros Base / Catálogo */}
        <div className="pt-4 pb-2">
          <p className="text-xs font-semibold text-slate-500 uppercase px-3 tracking-wider">
            Catálogo
          </p>
        </div>

        <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors">
          <Package size={20} /> Produtos
        </a>
        
        <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors">
          <Wrench size={20} /> Serviços
        </a>

        {/* Divisor: Pessoas e Veículos */}
        <div className="pt-4 pb-2">
          <p className="text-xs font-semibold text-slate-500 uppercase px-3 tracking-wider">
            Registros
          </p>
        </div>

        <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors">
          <Users size={20} /> Clientes
        </a>

        <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors">
          <CarFront size={20} /> Veículos
        </a>
      </nav>

      {/* Rodapé da Sidebar */}
      <div className="p-4 border-t border-slate-800">
        <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors text-slate-400 hover:text-white">
          <Settings size={20} /> Configurações
        </a>
      </div>
    </aside>
  );
}