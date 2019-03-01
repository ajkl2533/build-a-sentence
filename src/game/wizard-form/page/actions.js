import { createAction } from 'redux-actions';

const BTS_PAGE_GOTO_PREV_PAGE = 'BTS_PAGE_GOTO_PREV_PAGE';
const BTS_PAGE_GOTO_NEXT_PAGE = 'BTS_PAGE_GOTO_NEXT_PAGE';

export const goToPrevPage = createAction(BTS_PAGE_GOTO_PREV_PAGE);
export const goToNextPage = createAction(BTS_PAGE_GOTO_NEXT_PAGE);
