import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { noop } from 'ramda-adjunct';

import renderField from '../../../common/renderField';
import validate from '../validate';

class Page extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    hasPrevPage: PropTypes.bool.isRequired,
    invalid: PropTypes.bool.isRequired,
    onNextClick: PropTypes.func.isRequired,
    onPrevClick: PropTypes.func,
  };

  static defaultProps = {
    onPrevClick: noop,
  };

  constructor(props) {
    super(props);

    this.onNextPageClick = this.onNextPageClick.bind(this);
    this.onPrevPageClick = this.onPrevPageClick.bind(this);
  }

  onNextPageClick() {
    const { onNextClick } = this.props;

    return onNextClick();
  }

  onPrevPageClick() {
    const { onPrevClick } = this.props;

    return onPrevClick();
  }

  render() {
    const { id, label, hasPrevPage, invalid } = this.props;

    return (
      <form>
        <Field name={id} component={renderField} label={label} />
        <div>
          {hasPrevPage && (
            <button
              type="button"
              className="previous"
              onClick={this.onPrevPageClick}
            >
              Previous
            </button>
          )}
          <button
            type="button"
            className="next"
            onClick={this.onNextPageClick}
            disabled={invalid}
          >
            Next
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'wizardForm',
  validate,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Page);
