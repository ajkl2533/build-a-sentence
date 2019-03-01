import { createSelector } from 'reselect';
import { always } from 'ramda';
import { kebabCase } from 'lodash/fp';

/**
 * First page selectors
 */

export const firstPageLabelSelector = always('Who?');

export const firstPageIdSelector = createSelector(
  firstPageLabelSelector,
  kebabCase,
);

export const firstPageHasPrevPageSelector = always(false);

/**
 * Second page selectors
 */

export const secondPageLabelSelector = always('What?');

export const secondPageIdSelector = createSelector(
  secondPageLabelSelector,
  kebabCase,
);

export const secondPageHasPrevPageSelector = always(true);

/**
 * Third page selectors
 */

export const thirdPageLabelSelector = always('When?');

export const thirdPageIdSelector = createSelector(
  thirdPageLabelSelector,
  kebabCase,
);

export const thirdPageHasPrevPageSelector = always(true);

/**
 * Fourth page selectors
 */

export const fourthPageLabelSelector = always('Where?');

export const fourthPageIdSelector = createSelector(
  fourthPageLabelSelector,
  kebabCase,
);

export const fourthPageHasPrevPageSelector = always(true);
