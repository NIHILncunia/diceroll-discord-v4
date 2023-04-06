import { Mods } from '@/types/dice.types';

export const getMods = (diceString: string): Mods => {
  const mods = diceString.match(/[+-]([0-9]+)(?![Dd])/gi) || [];

  return {
    modsString: [ ...mods, ].join(', '),
    modsTotal: [ ...mods, ].reduce(
      (pre, acc) => pre + +acc,
      0
    ),
  };
};
