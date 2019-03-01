import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { noop } from 'ramda-adjunct';

import renderField from '../../../common/renderField';


class Page extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    hasPrevPage: PropTypes.bool.isRequired,
    onNextClick: PropTypes.func.isRequired,
    onPrevClick: PropTypes.func,
  }

  static defaultProps = {
    onClick: noop,
  }

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
    const { id, label, hasPrevPage } = this.props;

    return (
      <form>
        <Field
          name={id}
          component={renderField}
          label={label}
        />
        <div>
          {hasPrevPage && (
            <button type="button" className="previous" onClick={this.onPrevPageClick}>
              Previous
            </button>
          )}
          <button type="button" className="next" onClick={this.onNextPageClick}>
            Next
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Page);
