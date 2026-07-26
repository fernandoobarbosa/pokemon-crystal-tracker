# Fernando's Journey — Pokémon Crystal Legacy: Timeless Tracker

Site de acompanhamento da minha run de [Pokémon Crystal Legacy: Timeless Version](https://erick-tmr.github.io/Pokemon_Crystal_Legacy_Timeless/) no Game Boy: insígnias conquistadas, time atual e os eventos importantes (evoluções, capturas) que rolam entre um ginásio e outro.

Feito com [Astro](https://astro.build). Deploy automático na Vercel a cada push. Todos os sprites (Pokémon e ícones de insígnia) vêm de fontes públicas — não precisa anexar imagem na mão.

## Como atualizar o progresso

Não tem admin nem formulário — é tudo arquivo. Depois de jogar, editar/criar arquivos e dar `git push`.

### Conquistou uma insígnia

Crie `src/content/badges/0N-lider.md` (numerado em ordem, ex: `03-whitney.md`):

```markdown
---
leader: Whitney
badge_icon: plain
team: [croconaw, elekid, zubat, gastly, larvitar]
---
```

`badge_icon` é o nome do arquivo em `public/badges/` (sem `.png`). Já tem os 16 ícones prontos (8 de Johto + 8 de Kanto), recortados de `gfx/trainer_card/johto_badges.png` e `kanto_badges.png` do próprio jogo:

| Johto | ícone | | Kanto | ícone |
| :--- | :--- | :--- | :--- | :--- |
| Falkner | `zephyr` | | Brock | `boulder` |
| Bugsy | `hive` | | Misty | `cascade` |
| Whitney | `plain` | | Lt. Surge | `thunder` |
| Morty | `fog` | | Erika | `rainbow` |
| Chuck | `storm` | | Janine | `soul` |
| Jasmine | `mineral` | | Sabrina | `marsh` |
| Pryce | `glacier` | | Blaine | `volcano` |
| Clair | `rising` | | Blue | `earth` |

`team` é o time que você usou naquela luta (nomes de espécie em inglês) — aparece na página "Times por líder".

### Evoluiu um Pokémon ou fez uma captura importante

Crie `src/content/timeline/nome-do-evento.md`. O nome do Pokémon (`pokemon` / `evolved_from`) precisa bater com o nome da espécie em inglês (ex: `croconaw`, `bayleef`) — o sprite é resolvido automaticamente pelo National Dex.

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

`after_badge` é o id do arquivo de insígnia (`01-falkner`, sem `.md`) mais recente conquistado até aquele momento — é o que agrupa os eventos em "entre ginásio X e Y".

### Time mudou

Editar `src/content/team.json` direto — é o time atual, sem histórico.

## Comandos

| Comando           | Ação                                       |
| :----------------- | :------------------------------------------ |
| `npm run dev`      | Servidor local em `localhost:4321`           |
| `npm run build`    | Build de produção em `./dist/`               |
| `npm run preview`  | Preview do build local                       |
