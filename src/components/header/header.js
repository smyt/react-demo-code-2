import React from 'react';
import { connect } from 'react-redux';
import { Button, Layout } from 'antd';
import { openModal, logOut } from '../../actions'
import Logo from '../../logo'
import './header.scss';

const { Header } = Layout;

const loginButons = (openModal) => {
  return (
    <div>
      {/* We set arguments to openModal to set tab item */}
      <Button type="default" onClick={() => openModal('1')}>Log In</Button>
      <Button type="default" onClick={() => openModal('2')}>Sign Up</Button>
    </div>
  )
};

const logout = (logOut) => {
  return (
    <div>
      <Button type="default" onClick={() => logOut()}>Log Out</Button>
    </div>
  )
};

const HeaderBlock = ({isLoggined, openModal, logOut}) => {

  return (
    <Header>
      <div  className="logo">
        <Logo />
      </div>
      {/* Set log out button if we are loggened */}
      { isLoggined ?  logout(logOut) : loginButons(openModal) }
    </Header>
  )
};

const mapStateToProps = ({isLoggined}) => {
  return {
    isLoggined
  }
};

const mapDispatchToProps = {
  openModal,
  logOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(HeaderBlock)
