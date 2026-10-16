import type { Prato } from '../types';
import Preco from './Preco';
import Etiqueta from './Etiqueta';
import Alergenios from './Alergenios';

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

      {prato.vegetariano && (
        <div className="mt-3">
          <Etiqueta texto="Vegetariano" />
        </div>
      )}

      <Alergenios lista={prato.alergenios} />
    </article>
  );
}
