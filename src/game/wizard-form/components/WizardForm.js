import React from 'react';
import PropTypes from 'prop-types';

import FirstPage from '../page/containers/FirstPage';
import SecondPage from '../page/containers/SecondPage';
import ThirdPage from '../page/containers/ThirdPage';
import FourthPage from '../page/containers/FourthPage';
import Result from '../result/containers/Result';

const WizardForm = ({
  isFirstPage,
  isSecondPage,
  isThirdPage,
  isFourthPage,
  isResultPage,
}) => (
  <section>
    {isFirstPage && <FirstPage />}
    {isSecondPage && <SecondPage />}
    {isThirdPage && <ThirdPage />}
    {isFourthPage && <FourthPage />}
    {isResultPage && <Result />}
  </section>
);

WizardForm.propTypes = {
  isFirstPage: PropTypes.bool.isRequired,
  isSecondPage: PropTypes.bool.isRequired,
  isThirdPage: PropTypes.bool.isRequired,
  isFourthPage: PropTypes.bool.isRequired,
  isResultPage: PropTypes.bool.isRequired,
};

export default WizardForm;
