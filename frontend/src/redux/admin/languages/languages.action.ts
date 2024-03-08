export const actions = {
  CREATE_LANGUAGE_REQUEST: 'CREATE_LANGUAGE_REQUEST',
  CREATE_LANGUAGE_SUCCESS: 'CREATE_LANGUAGE_SUCCESS',
  CREATE_LANGUAGE_ERROR: 'CREATE_LANGUAGE_ERROR',

  GET_ALL_LANGUAGE_REQUEST: 'GET_ALL_LANGUAGE_REQUEST',
  GET_ALL_LANGUAGE_SUCCESS: 'GET_ALL_LANGUAGE_SUCCESS',
  GET_ALL_LANGUAGE_ERROR: 'GET_ALL_LANGUAGE_ERROR',

  REMOVE_LANGUAGE_REQUEST: 'REMOVE_LANGUAGE_REQUEST',
  REMOVE_LANGUAGE_SUCCESS: 'REMOVE_LANGUAGE_SUCCESS',
  REMOVE_LANGUAGE_ERROR: 'REMOVE_LANGUAGE_ERROR',

  createLanguage: (payload: any) => {
    return {
      type: actions.CREATE_LANGUAGE_REQUEST,
      payload: payload,
    };
  },

  getAllLanguage: () => {
    return {
      type: actions.GET_ALL_LANGUAGE_REQUEST,
    };
  },

  removeLanguage: (payload: any) => {
    return {
      type: actions.REMOVE_LANGUAGE_REQUEST,
      payload: payload,
    };
  },
};
export default actions;
