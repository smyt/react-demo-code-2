import React, {Component} from 'react';
import { Form, Icon, Input, Button, Alert  } from 'antd';
import { connect } from 'react-redux';

import './log-in-form.scss'

import  { closeModal,
          loggined,
          logginedError
        } from '../../actions/index'

const FormItem = Form.Item;

class LogInForm extends Component {

  handleSubmit = (e) =>  {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {

      if (
        !err &&
        this.props.data.username === values.userName &&
        this.props.data.password === values.password
      ) {
        this.props.closeModal();
        this.props.loggined();
      }

      if ((this.props.data.username !== values.userName  ||
          this.props.data.password !== values.password) &&
          !err
      ) {
        this.props.logginedError();
      }
    });
  };

  render() {
    const { form:{getFieldDecorator}, isLogginedError } = this.props;

    const error = () => {
      if (isLogginedError) {
        return <Alert
          message="Error"
          description="Incorrect password or username"
          type="error"
          showIcon
        />
      }
    }

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        {error()}
        <FormItem
          label="Username"
          hasFeedback
        >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem
          label="Password"
          hasFeedback
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={
              <Icon type="lock" style={{ fontSize: 13 }} />}
                   type="password"
                   placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <a className="login-form-forgot" href="">Troble loggin in ?</a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{width: '100%'}}
          >
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }

};

const mapStateToProps = ({isLoggined, isLogginedError, data}) => {
  return {
    data,
    isLoggined,
    isLogginedError
  }
};

const mapDispatchToProps = {
  closeModal,
  loggined,
  logginedError
};

const WrappedNormalLoginForm = Form.create()(LogInForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps)(WrappedNormalLoginForm)

