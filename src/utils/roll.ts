import { Roll } from '@/types/dice.types';

export const roll = (d: number, dn: number, operation = '+'): Roll => {
  const array: number[] = [];

  for (let i = 0; i < d; i++) {
    array.push(Math.floor(Math.random() * dn) + 1);
  }

  const arrayTotal = array
    .reduce((pre, acc) => pre + acc, 0);

  return {
    dice: `${d}D${dn}`,
    total: operation === '+' ? arrayTotal : arrayTotal * -1,
    numbers: array.join(', '),
  };
};
