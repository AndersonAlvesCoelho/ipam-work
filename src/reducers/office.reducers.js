import {
  OFFICE_REQUEST,
  OFFICE_SUCCESS,
  OFFICE_FAILURE,
} from '../constants/office.constants';

const initialState = {
  loading: false,
  message: null,
  dataOffice: null
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {

    case OFFICE_REQUEST:
      return { ...state, loading: true, dataOffice: '' };

    case OFFICE_SUCCESS: {
      const { dataOffice, message } = action;
      return { ...state, message, loading: false, dataOffice };
    }
    case OFFICE_FAILURE:
      const { message } = action;
      return { ...state, message, loading: false, dataOffice: '' };

    default:
      return state;
  }
}
