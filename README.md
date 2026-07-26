# Fernando's Journey — Pokémon Crystal Legacy: Timeless Tracker

Site de acompanhamento da minha run de [Pokémon Crystal Legacy: Timeless Version](https://erick-tmr.github.io/Pokemon_Crystal_Legacy_Timeless/) no Game Boy: insígnias conquistadas (com trainer card de cada uma), time atual e os eventos importantes (evoluções, capturas) que rolam entre um ginásio e outro.

Feito com [Astro](https://astro.build). Deploy automático na Vercel a cada push.

## Como atualizar o progresso

Não tem admin nem formulário — é tudo arquivo. Depois de jogar, editar/criar arquivos e dar `git push`.

### Conquistou uma insígnia

1. Gere um trainer card (ex: no [pokecharms.com](https://www.pokecharms.com/)) e salve o PNG em `public/trainer-cards/`.
2. Crie `src/content/badges/0N-lider.md` (numerado em ordem, ex: `03-whitney.md`):

   ```markdown
   ---
   gym: Goldenrod City
   leader: Whitney
   trainer_card: whitney-card.png
   ---

   Observações sobre a luta (opcional).
   ```

### Evoluiu um Pokémon ou fez uma captura importante

Crie `src/content/timeline/nome-do-evento.md`. O nome do Pokémon (`pokemon` / `evolved_from`) precisa bater com o nome da pasta de sprites do jogo em [`gfx/pokemon/`](https://github.com/erick-tmr/Pokemon_Crystal_Legacy_Timeless/tree/main/gfx/pokemon) — os sprites são puxados automaticamente de lá, não precisa anexar imagem.

Evolução:

```markdown
---
pokemon: croconaw
evolved_from: totodile
location: Route 32
after_badge: 01-falkner
---
```

Captura:

```markdown
---
pokemon: noctowl
location: Ilex Forest
after_badge: 01-falkner
---
```

`after_badge` é o id do arquivo de insígnia (`01-falkner`, sem `.md`) mais recente conquistado até aquele momento — é o que agrupa a timeline em "entre ginásio X e Y".

### Time mudou

Editar `src/content/team.json` direto — é o time atual, sem histórico.

## Comandos

| Comando           | Ação                                       |
| :----------------- | :------------------------------------------ |
| `npm run dev`      | Servidor local em `localhost:4321`           |
| `npm run build`    | Build de produção em `./dist/`               |
| `npm run preview`  | Preview do build local                       |
