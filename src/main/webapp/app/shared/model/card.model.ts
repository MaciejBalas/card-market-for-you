export interface ICard {
  id?: number;
  cardName?: string;
  rulesText?: string;
}

export const defaultValue: Readonly<ICard> = {};
