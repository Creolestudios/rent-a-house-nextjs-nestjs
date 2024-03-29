export const actions = {
  GET_COMMISSION_REQUEST: "GET_COMISSION_REQUEST",
  GET_COMMISSION_SUCCESS: "GET_COMMISSION_SUCCESS",
  GET_COMMISSION_ERROR: "GET_COMMISSION_ERROR",

  UPDATE_COMMISSION_REQUEST: "UPDATE_COMMISSION_REQUEST",
  UPDATE_COMMISSION_SUCCESS: "UPDATE_COMMISSION_SUCCESS",
  UPDATE_COMMISSION_ERROR: "UPDATE_COMISSION_ERROR",

  getCommission: () => ({
    type: actions.GET_COMMISSION_REQUEST,
  }),

  updateCommission: (payload: any) => ({
    type: actions.UPDATE_COMMISSION_REQUEST,
    payload: payload,
  }),
};
export default actions;
