import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { SummaryCard } from './components/SummaryCard';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <Sidebar />

      <main className="flex-1">
        <Header title="Dashboard" />

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SummaryCard label="OS Abertas" value="12" />
            <SummaryCard label="Faturamento (Mês)" value="R$ 15.420" />
            <SummaryCard 
              label="Aguardando Peças" 
              value="5" 
              valueColor="text-orange-500" 
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;