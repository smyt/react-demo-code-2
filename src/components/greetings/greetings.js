import React, {Component} from 'react';
import { connect } from 'react-redux';

class Greetings extends Component {

  render() {

    if (this.props.isLoggined && !this.props.verifySuccessLable) {
      return <h1>LOGGED IN!</h1>
    }

    if (this.props.isLoggined && this.props.verifySuccessLable) {
      return <h1>SIGN UP!</h1>
    }

    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = ({isLoggined, verifySuccessLable}) => {
  return {
    isLoggined,
    verifySuccessLable
  }
};


export default connect(
  mapStateToProps,
  null)(Greetings)

