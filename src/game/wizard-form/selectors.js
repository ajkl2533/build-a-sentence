import { createSelector } from 'reselect';
import { equals, path, prop, join } from 'ramda';
import { getFormValues } from 'redux-form';

import {
  firstPageIdSelector,
  secondPageIdSelector,
  thirdPageIdSelector,
  fourthPageIdSelector,
} from './page/selectors';

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

export const isResultPageSelector = createSelector(
  pageSelector,
  equals(5),
);

export const wizardFormValuesSelector = getFormValues('wizardForm');

export const firstPageAnswerSelector = createSelector(
  wizardFormValuesSelector,
  prop(firstPageIdSelector()),
);

export const secondPageAnswerSelector = createSelector(
  wizardFormValuesSelector,
  prop(secondPageIdSelector()),
);

export const thirdPageAnswerSelector = createSelector(
  wizardFormValuesSelector,
  prop(thirdPageIdSelector()),
);

export const fourthPageAnswerSelector = createSelector(
  wizardFormValuesSelector,
  prop(fourthPageIdSelector()),
);

export const resultSentenceSelector = createSelector(
  firstPageAnswerSelector,
  secondPageAnswerSelector,
  fourthPageAnswerSelector,
  thirdPageAnswerSelector,
  (...answers) => join(' ', answers),
);
