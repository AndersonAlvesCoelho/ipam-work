import { HIDE, SHOW } from '../constants/toast.constants';

const initialState = {
  show: false,
  status: '',
  title: '',
  message: '',
};

export default function toast(state = initialState, action) {
  switch (action.type) {
    case HIDE:
      return {
        ...state,
        show: false,
        status: '',
        title: '',
        message: '',
        delay: '',
      };
    case SHOW:
      return {
        ...state,
        show: true,
        status: action.status,
        title: action.title,
        message: action.message,
        delay: action.delay,
      };
    default:
      return state;
  }
}
