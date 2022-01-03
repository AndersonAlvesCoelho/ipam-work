import { HIDE, SHOW } from '../constants/toast.constants';

export function hide() {
  return { type: HIDE };
}

export const show = (status, title, message, delay = 3000) => (dispatch) => {
  dispatch({
    type: SHOW,
    status,
    title,
    message,
    delay,
  });
  setTimeout(() => {
    dispatch(hide());
  }, delay);
};

export const showActions = {
  show,
};
