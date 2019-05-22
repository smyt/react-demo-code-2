import React, {Component} from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import './success.scss'
import  { closeModal, loggined } from '../../actions/index'

class VerifySuccess extends Component {

  state = {
    visible:false
  };

  componentDidMount() {

    this.modalTimout = setTimeout(() => {
      this.props.loggined();
      this.props.closeModal();
    }, 2500);

    this.IconTimeOut = setTimeout(() => {
      this.setState({
        visible:true
      })
    }, 500);


  }

  componentWillUnmount() {
    clearTimeout(this.modalTimout)
    clearTimeout(this.IconTimeOut)
  }


  render() {
    const IconAnimation = this.state.visible ? 'svg_visible ' : null
    return (
      <div className="verify-success">
        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a"
              className={IconAnimation} />
        <h2>Identity Verified</h2>
      </div>

    )
  }
}

const mapDispatchToProps = {
  closeModal,
  loggined
};

export default connect(
  null,
  mapDispatchToProps)(VerifySuccess)
