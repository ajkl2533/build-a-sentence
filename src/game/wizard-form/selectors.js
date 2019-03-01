import { createSelector } from 'reselect';
import { equals, path } from 'ramda';

export const pageSelector = path(['game', 'router', 'page']);

export const isFirstPageSelector = createSelector(
  pageSelector,
  equals(1),
);

export const isSecondPageSelector = createSelector(
  pageSelector,
  equals(2),
);

export const isThirdPageSelector = createSelector(
  pageSelector,
  equals(3),
);

export const isFourthPageSelector = createSelector(
  pageSelector,
  equals(4),
);
