export const actions = {
  CONTENT_REQUEST: 'CONTENT_REQUEST',
  CONTENT_SUCCESS: 'CONTENT_SUCCESS',
  CONTENT_ERROR: 'CONTENT_ERROR',

  getContent: (payload: any) => {
    return {
      type: actions.CONTENT_REQUEST,
      payload: payload,
    };
  },
};

export default actions;
