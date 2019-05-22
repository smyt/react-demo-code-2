import React, {Component} from 'react';
import { connect } from 'react-redux';
import WrappedNormalLoginForm from '../log-in-form'
import WrappedSignUpForm from '../sign-up-form'
import WrappedVerify from '../verify'
import { Modal, Tabs, Divider} from 'antd';
import  {closeModal, onChange} from '../../actions/index'
import Logo from '../../logo'
import './modal.scss'
const TabPane = Tabs.TabPane;

class ModalContent extends Component {

  state = {
    mode: 'top',
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };


  render() {
    const { mode } = this.state;
    const { visible, closeModal, activeKey, onChange } = this.props;

    const tabs =  <Tabs
                    defaultActiveKey={activeKey}
                    tabPosition={mode}
                    style={{ height: 'auto' }}
                    onChange={onChange}
                    activeKey={activeKey}
                  >
                    <TabPane tab="Log In" key="1">
                      <WrappedNormalLoginForm />
                    </TabPane>
                    <TabPane tab="Sign Up" key="2">
                      <WrappedSignUpForm />
                    </TabPane>
                  </Tabs>

    const verifyBlock = <WrappedVerify />;


    return (
      <Modal
        title={null}
        visible={visible}
        onOk={this.handleOk}
        onCancel={closeModal}
        bodyStyle={{ height: 'auto' }}
        footer={null}
        closable={false}
        className="modal"
      >
        <div>
          <div className="modal-title">
            <Logo />
            <h1>{ this.props.verifyBlock ? `Verify SMS` : `Join RobeDuels today`}</h1>
          </div>
          <Divider />
          {/* Define verify or tabs block in modal */}
          {this.props.verifyBlock ? verifyBlock : tabs }
        </div>

      </Modal>
    )
  }
}

const mapStateToProps = ({visible, activeKey, verifyBlock}) => {
  return {
    visible,
    activeKey,
    verifyBlock
  }
};

const mapDispatchToProps = {
  closeModal,
  onChange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(ModalContent)

