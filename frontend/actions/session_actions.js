import * as APIUtil from '../util/session_api_util';

export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = currentUser => {
  return(  {
      type: RECEIVE_CURRENT_USER,
      currentUser
    });
};

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const getUser = id => dispatch => (
  APIUtil.show(id).then(userResp => (
    dispatch(receiveCurrentUser(userResp))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const signup = user => dispatch => (
  APIUtil.signup(user).then(userResp => (
    dispatch(receiveCurrentUser(userResp))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(userResp => (
    dispatch(receiveCurrentUser(userResp))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(userResp => (
    dispatch(receiveCurrentUser(null))
  ))
);
