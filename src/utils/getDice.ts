import { roll } from './roll';
import { rolls } from './rolls';
import { mainBreak } from './mainDBreak';
import { modDBreak } from './modDBreak';
import { getMods } from './getMods';
import { DiceResult } from '@/types/dice.types';

export const getDice = (diceString: string): DiceResult[] => {
  const resultArray: DiceResult[] = [];

  const [ dices, multi, ] = diceString.split('*');
  const m = parseInt(multi, 10) || 1;

  const mainDice = mainBreak(dices);
  const modDice = modDBreak(dices);
  const mods = getMods(dices);

  for (let i = 0; i < m; i++) {
    const mainResult = roll(mainDice.d, mainDice.dn);
    const modDResult = rolls(modDice);

    const modDTotal = modDResult.map((item) => item.total)
      .reduce((pre, acc) => pre + acc, 0);

    resultArray.push({
      dice: dices,
      total: mainResult.total + modDTotal + mods.modsTotal,
      detail: [
        `${mainResult.dice} => **${mainResult.total}** *[ ${mainResult.numbers} ]*\n`,
        modDResult.map((item) => (
          `${item.dice} => **${item.total < 0 ? item.total * -1 : item.total}** *[ ${item.numbers} ]*\n`
        )).join(),
        `보정치 => *[ ${mods.modsString} ]*`,
      ],
    });
  }

  return resultArray;
};
