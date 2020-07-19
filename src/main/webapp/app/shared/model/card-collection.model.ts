import { ICard } from './card.model';

export interface ICardCollection extends Array<ICard> {}

export const defaultValue: Readonly<ICardCollection> = [{}];
