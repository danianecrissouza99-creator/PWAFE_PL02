# Uso de IA · PL02

**Ferramenta:** Claude (Claude Code, no VS Code)

## O que pedi

- Orientação para criar o projecto e resolver problemas: o `types.ts` estava na pasta errada (`src/data` em vez de `src`), havia ficheiros do modelo no primeiro commit (corrigi com `git commit --amend`) e o VS Code mostrava um erro antigo (resolvi com "Restart TS Server").
- O código dos componentes (`Preco`, `Etiqueta`, `CartaoPrato`, `Seccao`, `ListaPratos`) e do `App`, que depois testei e analisei.
- Explicação dos erros da caça aos erros e ajuda a escrever o `respostas.md` e o `README.md`.

## O que fiz / verifiquei eu

- Escolhi os pratos 4, 5 e 6 dos dados.
- Corri o `npm run build` depois de cada passo e confirmei o resultado no navegador.
- Fiz os testes pedidos: categoria `'bebida'` (TS2322), os erros do `CartaoSimples` no build e o aviso da `key` na consola, lista de sobremesas vazia (sem `0` no ecrã), `soVegetarianos = true` e a grelha a 375 px, `sm` e `lg`.

## O que aprendi

- Um tipo com `'sopa' | 'prato' | 'sobremesa'` não deixa usar outros valores.
- Os componentes têm de começar com maiúscula; em minúscula o JSX acha que é uma tag HTML.
- Quando se usa `map`, cada elemento precisa de uma `key`. Esse erro só aparece na consola, não no build.
- Usar `lista.length === 0 ? ... : ...` em vez de `&&` evita aparecer um `0` no ecrã.
