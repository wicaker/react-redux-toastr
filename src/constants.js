export const ADD_TOASTR = '@ReduxToastr/toastr/ADD';
export const REMOVE_TOASTR = '@ReduxToastr/toastr/REMOVE';
export const CLEAN_TOASTR = '@ReduxToastr/toastr/CLEAN';
export const SHOW_CONFIRM = '@ReduxToastr/confirm/SHOW';
export const HIDE_CONFIRM = '@ReduxToastr/confirm/HIDE';
export const REMOVE_BY_TYPE = '@ReduxToastr/toastr/REMOVE_BY_TYPE';
export const UPDATE_TIME_OUT = '@ReduxToastr/toastr/UPDATE_TIME_OUT';
// before add a new transition - check its presence in src/styles/animations.scss
export const TRANSITIONS = {
  in: ['bounceIn', 'bounceInDown', 'fadeIn', 'slideInDown'],
  out: ['bounceOut', 'bounceOutUp', 'fadeOut', 'slideOutUp']
};
