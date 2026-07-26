const SPRITE_BASE =
  'https://raw.githubusercontent.com/erick-tmr/Pokemon_Crystal_Legacy_Timeless/main/gfx/pokemon';

export function spriteUrl(species: string, side: 'front' | 'back' = 'front'): string {
  return `${SPRITE_BASE}/${species.toLowerCase()}/${side}.png`;
}
