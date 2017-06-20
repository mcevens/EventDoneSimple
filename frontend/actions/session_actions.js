import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const signup = user => dispatch => (
  APIUtil.signup(user).then(userResp => (
    dispatch(receiveCurrentUser(userResp))
  ))
);

export const login = user => dispatch => {
  return APIUtil.login(user).then(userResp => {
    return dispatch(receiveCurrentUser(userResp));
  }
  );
};

export const logout = () => dispatch => (
  APIUtil.logout().then(userResp => (
    dispatch(receiveCurrentUser(null))
  ))
);
