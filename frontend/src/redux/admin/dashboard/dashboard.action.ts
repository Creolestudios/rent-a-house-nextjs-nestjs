export const actions = {
  GET_DASHBOARD_REQUEST: "GET_DASHBOARD_REQUEST",
  GET_DASHBOARD_SUCCESS: "GET_DASHBOARD_SUCCESS",
  GET_DASHBOARD_ERROR: "GET_DASHBOARD_ERROR",

  getDashboardData: (payload) => ({
    type: actions.GET_DASHBOARD_REQUEST,
    payload: payload
  }),
};
export default actions;
