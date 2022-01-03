import * as Cookies from 'js-cookie';
import { show } from '../actions/toast.actions';

export const setUserCookie = (session) => {
  Cookies.remove('userCookie');
  Cookies.set('userCookie', session, { expires: 15 });
};

export const getUserCookie = () => {
  const sessionCookie = Cookies.get('userCookie');

  if (sessionCookie === undefined) {
    return null;
  }
  return JSON.parse(sessionCookie);
};

export const removeUserCookie = () => {
  Cookies.remove('userCookie');
};

export const getIdUser = () => (dispatch) => {
  const user = getUserCookie();

  const { usu_id: userId } = user && user[0].original.data ? user[0].original.data : null;

  if (!userId) {
    dispatch(show('info', 'ERRO', 'Usuário não logado.', 10000));
    return false;
  }

  return userId;
};

export const idUser = getIdUser();

export const getAccessLevelUser = () => {
  const user = getUserCookie();

  const { 0: userItem } = user || {};
  const { original: originalUser } = userItem || {};
  const { data: dataUser } = originalUser || {};
  const { usu_id_niveis_acessos: accessLevelUser } = dataUser || {};

  if (!accessLevelUser) {
    return false;
  }

  return accessLevelUser;
};

export const accessLevelUser = getAccessLevelUser();

export const { uf_usu_avaliador: ufUsuAvaliador } = getUserCookie() || {};
