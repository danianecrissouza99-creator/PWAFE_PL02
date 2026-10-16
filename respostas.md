# PL02 · Respostas

## Exercício 2 · Categoria inválida

Mudei a categoria do prato 1 para `'bebida'` e o build deu este erro:

```
src/data/pratos.ts:4:49 - error TS2322: Type '"bebida"' is not assignable to type 'Categoria'.
```

O tipo `Categoria` só aceita `'sopa'`, `'prato'` ou `'sobremesa'`. Como `'bebida'` não está na lista, o TypeScript recusa. Voltei a pôr `'sopa'`.

## Exercício 5 · Caça aos erros

| # | Onde aparece | Mensagem | Correcção |
|---|---|---|---|
| 1 | build | TS1484: `'Prato' is a type and must be imported using a type-only import` | Mudei para `import type { Prato }`, porque o `Prato` é só um tipo |
| 2 | build | TS2339: `Property 'preco' does not exist on type 'JSX.IntrinsicElements'` | Escrevi `<Preco>` com maiúscula. Em minúscula o JSX acha que é uma tag HTML. Isto também fez desaparecer o TS6133 (`'Preco' is declared but never read`) |
| 3 | build | TS2304: `Cannot find name 'Etiqueta'` | Faltava o import: `import Etiqueta from './Etiqueta'` |
| 4 | consola | `Each child in a list should have a unique "key" prop.` | Pus `key={a}` no `<span>` dentro do `map` |
