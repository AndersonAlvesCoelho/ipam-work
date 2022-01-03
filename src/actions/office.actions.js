import {
  OFFICE_REQUEST,
  OFFICE_SUCCESS,
  OFFICE_FAILURE,
} from '../constants/office.constants';

import api from '../services/api';

export const getOffice = () => (dispatch) => {
  dispatch({ type: OFFICE_REQUEST });

  api
    .get('office')
    .then((res) => {
      const { data } = res;

      dispatch({
        type: OFFICE_SUCCESS,
        dataOffice: data
      });
    })
    .catch((error) => {
      const { response: err } = error;
      const message = err && err.data ? err.data.message : 'Erro desconhecido';
      // dispatch(show('danger', 'ERRO', message, 5000));
      dispatch({ type: OFFICE_FAILURE, message });
    });
};

