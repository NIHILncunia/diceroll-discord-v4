import { CustomResult } from '@/types/dice.types';
import { getDice } from './getDice';

export const multiRoll = (dice: string): CustomResult[] => {
  const resultArray: CustomResult[] = [];
  dice = dice.replace(/[dㅇ]/g, 'D');

  // TODO: 1. 공백으로 주사위식을 나눔.
  const dices = dice.split(' ');

  // TODO: 2. 나눈 주사위식을 각각 처리함.
  dices.forEach((item) => {
    const result = getDice(item);

    resultArray.push(...result.map((item) => ({
      dice: item.dice,
      detail: [
        `결과 => **${item.total}**\n`,
        ...item.detail,
      ].join(''),
    })));
  });

  return resultArray;
};

multiRoll('4D120+10+30-4+10-2*3 d20+17 d8+11+2d6');
