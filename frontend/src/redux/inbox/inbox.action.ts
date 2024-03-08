export const actions = {
  GET_MESSAGE_REQUEST: 'GET_MESSAGE_REQUEST',
  GET_MESSAGE_SUCCESS: 'GET_MESSAGE_SUCCESS',
  GET_MESSAGE_ERROR: 'GET_MESSAGE_ERROR',

  SET_SORTLIST_REQUEST:'SET_SORTLIST_REQUEST',
  SET_SORTLIST_SUCCESS:'SET_SORTLIST_SUCCESS',
  SET_SORTLIST_ERROR:'SET_SORTLIST_ERROR',


  getMessages: (payload: any) => {
    return {
      type: actions.GET_MESSAGE_REQUEST,
      payload: payload,
    };
  },

  setSortlistMessage:(payload:any)=>{
    return {
      type:actions.SET_SORTLIST_REQUEST,
      payload:payload
    }
  }
};

export default actions;
