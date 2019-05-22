
const initialState = {
  visible: false,
  signUpData:{},
  data:{},
  isLoggined:false,
  isLogginedError:false,
  activeKey:null,
  defaultActiveKey:null,
  verifyBlock: false,
  verifyCode: 1234,
  verifyPhoneNumber: null,
  verifyStep: 1,
  verifySuccessLable:false,
};

const reducer = (state = initialState,  action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        visible: true,
        activeKey:action.activeKey,
        defaultActiveKey:'null'
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        visible: false,
        verifyBlock: false
      };
    case 'NEXT_SIGN_UP_STEP':
      return {
        ...state,
        verifyBlock: true,
        isLogginedError: false
      };
    case 'LOGGINED':
      return {
        ...state,
        isLoggined: true,
        isLogginedError: false
      };
    case 'LOG_OUT':
      return {
        ...state,
        isLoggined: false,
        isLogginedError: false,
        verifySuccessLable:false,
        verifyStep: 1
      };
    case 'SET_SIGN_UP_DATA':
      return {
        ...state,
        signUpData:{...action.data}
      };
    case 'SET_PHONE_NUMBER_DATA':
      return {
        ...state,
        verifyPhoneNumber:{...action.data}
      };
    case 'VERIFY_STEPS':
      return {
        ...state,
        verifyStep:action.step
      };
      case 'VERIFY_SUCCESS':
      return {
        ...state,
        verifySuccessLable:true,
        data:state.signUpData
      };
    case 'LOGGINED_ERROR':
      return {
        ...state,
        isLogginedError: true
      };
    case 'TAB_ON_CHANGE':
      return {
        ...state,
        activeKey: action.activeKey
      };

    default:
      return state;
  }
};

export default reducer;