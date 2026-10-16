import ListaPratos from './components/ListaPratos';
import Preco from './components/Preco';
import Seccao from './components/Seccao';
import { pratos } from './data/pratos';

const soVegetarianos = false;

export default function App() {
  const visiveis = soVegetarianos
    ? pratos.filter((prato) => prato.vegetariano)
    : pratos;

  const sopas = visiveis.filter((prato) => prato.categoria === 'sopa');
  const principais = visiveis.filter((prato) => prato.categoria === 'prato');
  const sobremesas = visiveis.filter((prato) => prato.categoria === 'sobremesa');

  const totalVegetarianos = visiveis.filter((prato) => prato.vegetariano).length;

  const soma = visiveis.reduce((total, prato) => total + prato.preco, 0);
  const precoMedio = visiveis.length === 0 ? 0 : soma / visiveis.length;

  return (
    <main className="min-h-screen bg-slate-100 p-4 sm:p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold">Ementa de hoje</h1>
        <p className="mt-1 text-slate-500">
          {visiveis.length} opções, {totalVegetarianos} vegetarianas · preço médio{' '}
          <Preco valor={precoMedio} />
        </p>

        <Seccao titulo={`Sopas (${sopas.length})`}>
          <ListaPratos pratos={sopas} />
        </Seccao>

        <Seccao titulo={`Pratos principais (${principais.length})`}>
          <ListaPratos pratos={principais} />
        </Seccao>

        <Seccao titulo={`Sobremesas (${sobremesas.length})`}>
          <ListaPratos pratos={sobremesas} />
        </Seccao>
      </div>
    </main>
  );
}
