import * as Types from './../types/loginTypes';

const defaultState = {
  isSessionExpired: false,
  isTokenValid: true,
  token: null,
  idDispositivo: null,
};
export default function reducer(state = defaultState, action) {
  if (action.type === Types.AUTH_TOKEN) {
    return {
      ...state,
      isTokenValid: action.isTokenValid,
      token: action.token,
      idDispositivo: action.idDispositivo,
    };
  } else if (action.type === Types.CHECK_TOKEN) {
    return {
      ...state,
    };
  } else if (action.type === Types.ERROR_AUTH) {
    return {
      ...state,
    };
  } else if (action.type === Types.TOKEN_EXPIRED) {
    return {
      ...state,
      isSessionExpired: true,
    };
  } else {
    return state;
  }
}
