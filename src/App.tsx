import CartaoPrato from './components/CartaoPrato';
import Seccao from './components/Seccao';
import { pratos } from './data/pratos';

export default function App() {
  const sopas = pratos.filter((prato) => prato.categoria === 'sopa');
  const principais = pratos.filter((prato) => prato.categoria === 'prato');
  const sobremesas = pratos.filter((prato) => prato.categoria === 'sobremesa');

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-3xl font-bold">Ementa de hoje</h1>

      <Seccao titulo="Sopas">
        {sopas.length === 0 ? (
          <p className="text-slate-500">Hoje não há opções nesta categoria.</p>
        ) : (
          <div className="grid gap-4">
            {sopas.map((prato) => (
              <CartaoPrato key={prato.id} prato={prato} />
            ))}
          </div>
        )}
      </Seccao>

      <Seccao titulo="Pratos principais">
        {principais.length === 0 ? (
          <p className="text-slate-500">Hoje não há opções nesta categoria.</p>
        ) : (
          <div className="grid gap-4">
            {principais.map((prato) => (
              <CartaoPrato key={prato.id} prato={prato} />
            ))}
          </div>
        )}
      </Seccao>

      <Seccao titulo="Sobremesas">
        {sobremesas.length === 0 ? (
          <p className="text-slate-500">Hoje não há opções nesta categoria.</p>
        ) : (
          <div className="grid gap-4">
            {sobremesas.map((prato) => (
              <CartaoPrato key={prato.id} prato={prato} />
            ))}
          </div>
        )}
      </Seccao>
    </main>
  );
}
