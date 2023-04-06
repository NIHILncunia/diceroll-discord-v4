import { DiceBreak } from '@/types/dice.types';

export const modDBreak = (diceString: string) => {
  const modDArray: DiceBreak[] = [];

  const modDice = diceString.match(/([+-])([0-9]+)?[Dd]([0-9]+)/gi) || [];
  modDice.forEach((item) => {
    const [ operation, ...dice ] = item;

    const [ dices, diceNumber, ] = dice.join('').split(/[dD]/g);
    const d = parseInt(dices, 10) || 1;
    const dn = parseInt(diceNumber, 10);

    modDArray.push({
      d,
      dn,
      operation,
    });
  });

  return modDArray;
};
