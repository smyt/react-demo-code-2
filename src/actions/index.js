const openModal = (tabKey) => {
  return {
    type: 'OPEN_MODAL',
    activeKey: tabKey
  }
};

const closeModal = () => {
  return {
    type: 'CLOSE_MODAL',
  }
};

const verifyBlock = () => {
  return {
    type: 'NEXT_SIGN_UP_STEP',
  }
};

const setSignUpData = (data) => {
  return {
    type: 'SET_SIGN_UP_DATA',
    data
  }
};

const setPhoneNumberData = (data) => {
  return {
    type: 'SET_PHONE_NUMBER_DATA',
    data
  }
};

const loggined = () => {
  return {
    type: 'LOGGINED',
  }
};

const logOut = () => {
  return {
    type: 'LOG_OUT',
  }
};

const logginedError = () => {
  return {
    type: 'LOGGINED_ERROR',
  }
};

const verifySteps = (step) => {
  return {
    type: 'VERIFY_STEPS',
    step
  }
};
const verifySuccess = (step) => {
  return {
    type: 'VERIFY_SUCCESS',
    step
  }
};

const onChange = (activeKey) => {
  return {
    type: 'TAB_ON_CHANGE',
    activeKey: activeKey
  }
};

export {
  openModal,
  closeModal,
  verifyBlock,
  loggined,
  logOut,
  logginedError,
  onChange,
  setSignUpData,
  setPhoneNumberData,
  verifySteps,
  verifySuccess
};