interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8">
      <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500">Oficina Central</span>
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
          AD
        </div>
      </div>
    </header>
  );
}