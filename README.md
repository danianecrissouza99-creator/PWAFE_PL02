# pwafe-pl02 · Ementa da cantina

Ementa do dia de uma cantina, feita em React + TypeScript com Vite e Tailwind CSS v4.
Mostra os pratos por categoria (sopas, pratos principais e sobremesas), com preço, etiqueta de vegetariano e alergénios.

Projecto da PL02 de Programação Web Avançada para Front-End (ISTEC Porto).

## Como correr

```
npm install
npm run dev
```

Para gerar a versão final:

```
npm run build
```

## Estrutura das pastas

```
src/
├── components/
│   ├── CartaoPrato.tsx   # cartão de um prato (nome, preço, etiquetas)
│   ├── Etiqueta.tsx      # etiqueta verde (normal) ou amarela (aviso)
│   ├── ListaPratos.tsx   # grelha de cartões ou mensagem de lista vazia
│   ├── Preco.tsx         # mostra o preço no formato 5,50 €
│   └── Seccao.tsx        # secção com título e children
├── data/
│   └── pratos.ts         # lista dos pratos da ementa
├── types.ts              # tipos Categoria e Prato
├── App.tsx               # página principal
├── main.tsx
└── index.css             # @import "tailwindcss"
```
