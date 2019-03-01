import { either } from 'ramda';
import { isUndefined,  isEmptyString } from 'ramda-adjunct';
import { 
  firstPageIdSelector, secondPageIdSelector, thirdPageIdSelector, fourthPageIdSelector,
} from './selectors';


const validate = values => {
  const errors = {};
  const isEmptyField = either(
    isUndefined,
    isEmptyString,
  );
  const firstPageFieldId = firstPageIdSelector();
  const secondPageFieldId = secondPageIdSelector();
  const thirdPageFieldId = thirdPageIdSelector();
  const fourthPageFieldId = fourthPageIdSelector();

  if (isEmptyField(values[firstPageFieldId])) {
    errors[firstPageFieldId] = 'This field is required';
  } 

  if (isEmptyField(values[secondPageFieldId])) {
    errors[secondPageFieldId] = 'This field is required';
  }

  if (isEmptyField(values[thirdPageFieldId])) {
    errors[thirdPageFieldId] = 'This field is required';
  }

  if (isEmptyField(values[fourthPageFieldId])) {
    errors[fourthPageFieldId] = 'This field is required';
  }

  return errors;
}

export default validate;
