import { DiceBreak } from '@/types/dice.types';

export const mainBreak = (diceString: string): DiceBreak => {
  const mainDice = diceString.match(/^([0-9]+)?D([0-9]+)/gi)[0];

  const [ dices, diceNumber, ] = mainDice.split(/[dD]/g);
  const d = parseInt(dices, 10) || 1;
  const dn = parseInt(diceNumber, 10);

  return {
    d,
    dn,
  };
};
