export const actions = {
  SEND_CONTACTUS_REQUEST: 'SEND_CONTACTUS_REQUEST',
  SEND_CONTACTUS_SUCCESS: 'SEND_CONTACTUS_SUCCESS',
  SEND_CONTACTUS_ERROR: 'SEND_CONTACTUS_ERROR',

  sendContactUs: (payload: any) => {
    return {
      type: actions.SEND_CONTACTUS_REQUEST,
      payload: payload,
    };
  },
};

export default actions;
