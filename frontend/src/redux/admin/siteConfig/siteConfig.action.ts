export const actions = {
  SITE_CONFIG_REQUEST: "SITE_CONFIG_REQUEST",
  SITE_CONFIG_SUCCESS: "SITE_CONFIG_SUCCESS",
  SITE_CONFIG_ERROR: "SITE_CONFIG_ERROR",

  UPDATE_CONFIG_REQUEST: "UPDATE_CONFIG_REQUEST",
  UPDATE_CONFIG_SUCCESS: "UPDATE_CONFIG_SUCCESS",
  UPDATE_CONFIG_ERROR: "UPDATE_CONFIG_ERROR",

  getSiteConfig: () => ({
    type: actions.SITE_CONFIG_REQUEST,
  }),

  updateSiteConfig: (payload: any) => ({
    type: actions.UPDATE_CONFIG_REQUEST,
    payload: payload,
  }),
};
export default actions;
