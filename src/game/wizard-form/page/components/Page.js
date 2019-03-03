import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { noop } from 'ramda-adjunct';

import renderField from '../../../common/renderField';
import validate from '../validate';

class Page extends React.Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
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
    const { page, id, label, hasPrevPage, invalid } = this.props;

    return (
      <form>
        <div className="subtitle">
          <span className="is-size-3">{page}</span>
          /4
        </div>
        <Field name={id} component={renderField} label={label} />
        <div className="columns">
          {hasPrevPage && (
            <div className="column is-one-fifth">
              <button
                type="button"
                className="button is-medium is-outlined is-danger is-inverted is-fullwidth previous"
                onClick={this.onPrevPageClick}
              >
                <span className="icon">
                  <i className="fas fa-arrow-left" />
                </span>
                <span>Previous</span>
              </button>
            </div>
          )}
          <div className="column is-one-fifth">
            <button
              type="submit"
              className="button is-medium is-outlined is-success is-inverted is-fullwidth next"
              onClick={this.onNextPageClick}
              disabled={invalid}
            >
              <span>Next</span>
              <span className="icon">
                <i className="fas fa-arrow-right" />
              </span>
            </button>
          </div>
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
