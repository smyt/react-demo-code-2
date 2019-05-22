import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';

import  {
  verifySteps,
  verifySuccess
} from '../../actions/index'

const FormItem = Form.Item;

class VerifyPhoneNumber extends Component {

  handleSubmitPrev = (e) =>  {
    e.preventDefault();
    this.props.verifySteps(1)
  };

  onFieldsChange = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (+values.code === this.props.verifyCode ) {
        this.props.verifySuccess()
      }
    });
  };

  render() {
    const { form:{getFieldDecorator},
      verifyPhoneNumber:{prefix, phone} } = this.props

    return (
      <div>
        <div>
          <h2>Enter your Code</h2>
          <span>
            We just send a text message to <strong> + {prefix} {phone} </strong>
            </span>
        </div>
        <Form onSubmit={this.handleSubmitPrev} className="login-form">
          <FormItem
            label="Code"
          >
            {getFieldDecorator('code', {
              rules: [{ required: true, message: 'Please input your code!' }],
            })(
              <Input style={{ width: '100%' }} onKeyUp={(e)=>{this.onFieldsChange(e)} } />
            )}
          </FormItem>
          <span>This can take a few minutes.</span>
          <FormItem>
            <Button type="primary" htmlType="submit" style={{marginRight:12}} className="login-form-button">
              Back
            </Button>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Retry
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }

};

const mapStateToProps = (
  {verifyStep,
    verifyCode,
    verifyPhoneNumber}) => {
  return {
    verifyPhoneNumber,
    verifyStep,
    verifyCode,

  }
};

const mapDispatchToProps = {
  verifySteps,
  verifySuccess
};

const WrappedVerifyPhoneNumber= Form.create()(VerifyPhoneNumber);

export default connect(
  mapStateToProps,
  mapDispatchToProps)(WrappedVerifyPhoneNumber)
