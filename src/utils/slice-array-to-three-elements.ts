import {OfferCard} from '../types/common-types';

export function sliceArrayToThreeElements(array: OfferCard[]) {
  if (array.length > 3) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array.slice(randomIndex, randomIndex + 3);
  }
  return array;
}
