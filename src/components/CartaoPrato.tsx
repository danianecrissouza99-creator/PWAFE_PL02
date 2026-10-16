import type { Prato } from '../types';
import Preco from './Preco';
import Etiqueta from './Etiqueta';

type CartaoPratoProps = {
  prato: Prato;
};

export default function CartaoPrato({ prato }: CartaoPratoProps) {
  return (
    <article className="rounded-xl bg-white p-4 shadow">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-slate-900">{prato.nome}</h3>
        <Preco valor={prato.preco} />
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {prato.vegetariano && <Etiqueta texto="Vegetariano" />}
        {prato.alergenios.map((alergenio) => (
          <Etiqueta key={alergenio} texto={alergenio} variante="aviso" />
        ))}
      </div>
    </article>
  );
}
