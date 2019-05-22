import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Select } from 'antd';

import  {
  verifySteps,
  setPhoneNumberData,
} from '../../actions/index'

const Option = Select.Option;
const FormItem = Form.Item;

class EnterNumber  extends Component{

  handleSubmitNext = (e) =>  {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {

      if (!err) {
        this.props.setPhoneNumberData(values)
        this.props.verifySteps(2)
      }
    });
  };

  render() {

    const { form:{getFieldDecorator}} = this.props
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 100 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
        <Option value="88">+88</Option>
        <Option value="89">+89</Option>
      </Select>
    );

    return (
      <div>
        <div>
          <h2>Enter your phone number</h2>
          <span>We will send you a one time verifycation code</span>
        </div>
        <Form onSubmit={this.handleSubmitNext} className="login-form">
          <FormItem
            label="Phone Number"
          >
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Please input your phone number!' }],
            })(
              <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            )}
          </FormItem>
          <span>To verify your account we'll need to confirm your phone number.
            This will only take a few seconds</span>
          <FormItem>
            <Button type="primary"
                    htmlType="submit"
                    style={{width:"100%"}}
                    className="login-form-button">
              Next
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }

};


const mapDispatchToProps = {
  setPhoneNumberData,
  verifySteps,
};

const WrappedEnterNumber = Form.create()(EnterNumber);

export default connect(
  null,
  mapDispatchToProps)(WrappedEnterNumber)
