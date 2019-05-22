import React, {Component} from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';

import  { closeModal,
         verifyBlock,
         setSignUpData
        } from '../../actions/index'

const FormItem = Form.Item;

class SignUpForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.setSignUpData(values)
        this.props.verifyBlock()
      }
    });
  };

  render() {
    const { form:{getFieldDecorator} } = this.props

    return (
      <Form onSubmit={this.handleSubmit} className="sign-up-form">
        <FormItem
          label="Username"
          hasFeedback
        >
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="Password"
          hasFeedback
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.checkConfirm,
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem
          label="E-mail"
          hasFeedback
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem>
          <a className="login-form-forgot" href="#">Privacy Policy</a>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              style={{width: '100%'}}
            >
              Register</Button>
          </FormItem>
        </FormItem>
      </Form>
    );
  }

}

const mapStateToProps = ({name, password}) => {
  return {
    name,
    password
  }
};

const mapDispatchToProps = {
  closeModal,
  verifyBlock,
  setSignUpData
};

const WrappedSignUpForm = Form.create()(SignUpForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps)(WrappedSignUpForm)

