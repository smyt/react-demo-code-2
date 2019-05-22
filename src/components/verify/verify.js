import React from 'react';
import { Form } from 'antd';
import { connect } from 'react-redux';
import VerifySuccess from '../verify-success'
import WrappedVerifyPhoneNumber from '../verify-phone-number'
import WrappedEnterNumber from '../enter-number/enter-number'

const Verify = ({verifySuccessLable, verifyStep }) => {

  /* Statements to set verifycations steps */
  const verifySuccess = verifySuccessLable ? <VerifySuccess /> : null;
  const verifyNumber = verifyStep === 2 && !verifySuccessLable ? <WrappedVerifyPhoneNumber /> : null;
  const enterNumber = verifyStep  === 1 && !verifySuccessLable ? <WrappedEnterNumber /> : null;

  return (
    <div>
      {verifyNumber}
      {enterNumber}
      {verifySuccess}
    </div>
  );
}

const mapStateToProps = ({verifyStep, verifySuccessLable}) => {
      return {
        verifyStep,
        verifySuccessLable
      }
};

const WrappedVerify = Form.create()(Verify);

export default connect(
  mapStateToProps,
  null)(WrappedVerify)

