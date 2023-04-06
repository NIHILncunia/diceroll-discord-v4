export interface Roll {
  dice: string;
  total: number;
  numbers: string;
  mods?: string;
}

export interface DiceBreak {
  d: number;
  dn: number;
  operation?: string;
}

export interface DiceResult {
  dice: string;
  total: number;
  detail: string[];
}

export interface Mods {
  modsString: string;
  modsTotal: number;
}

export interface CustomResult {
  dice: string;
  detail: string;
}
