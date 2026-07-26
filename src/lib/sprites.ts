import pokedex from '../data/pokedex.json';

const SPRITE_BASE =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal';

export function spriteUrl(species: string): string {
  const id = (pokedex as Record<string, number>)[species.toLowerCase()];
  if (!id) {
    throw new Error(`Unknown species "${species}" — not found in pokedex mapping`);
  }
  return `${SPRITE_BASE}/${id}.png`;
}

const TRAINER_SPRITE_BASE =
  'https://raw.githubusercontent.com/erick-tmr/Pokemon_Crystal_Legacy_Timeless/main/gfx/trainers';

export function trainerSpriteUrl(leader: string): string {
  const slug = leader.toLowerCase().replace(/\./g, '').replace(/\s+/g, '_');
  return `${TRAINER_SPRITE_BASE}/${slug}.png`;
}
