type PrecoProps = {
  valor: number;
};

export default function Preco({ valor }: PrecoProps) {
  return (
    <span className="font-semibold text-slate-900">
      {valor.toFixed(2).replace(".", ",")} €
    </span>
  );
}
