import {createSlice} from '@reduxjs/toolkit';
import {Review} from '../../types/common-types';
import {RequestStatus} from '../../types/redux-types';
import {fetchReviews} from '../thunks/reviews-thunk';

type initialState = {
  reviews: Review[];
  status: RequestStatus;
}

const initialState: initialState = {
  reviews: [],
  status: RequestStatus.Idle,
};

export const reviewsSlice = createSlice({
  initialState,
  name: 'reviews',
  reducers: {
    clear(state) {
      state.reviews = [];
      state.status = RequestStatus.Idle;
    }
  },
  selectors: {
    reviews: (state) => state.reviews,
    status: (state) => state.status,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReviews.pending, (state) => {
      state.status = RequestStatus.Loading;
    });
    builder.addCase(fetchReviews.fulfilled, (state, action) => {
      state.status = RequestStatus.Success;
      state.reviews = action.payload;
    });
    builder.addCase(fetchReviews.rejected, (state) => {
      state.status = RequestStatus.Failed;
    });
  },
});

const reviewsActions = {...reviewsSlice.actions, fetchReviews};
const reviewsSelectors = reviewsSlice.selectors;

export {reviewsActions, reviewsSelectors};
