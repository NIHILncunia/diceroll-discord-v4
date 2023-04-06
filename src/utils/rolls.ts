import { DiceBreak, Roll } from '@/types/dice.types';
import { roll } from './roll';

export const rolls = (diceArray: DiceBreak[]): Roll[] => {
  const array: Roll[] = [];

  diceArray.forEach((item) => {
    array.push(roll(item.d, item.dn, item.operation));
  });

  return array;
};
