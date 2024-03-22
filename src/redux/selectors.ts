import {RootState} from '../types/redux-types';

const selectCity = (state: RootState) => state.offers.city;
const selectOffers = (state: RootState) => state.offers.offers;

console.log(selectCity);

export {selectCity, selectOffers};
