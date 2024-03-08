import { HYDRATE } from 'next-redux-wrapper';
import actions from './inbox.action';

const initialState = {
  error: '',
  messages: [],
};

export default function inboxReducer(state = initialState, action: any) {
  switch (action.type) {
    case HYDRATE: {
      return { ...action.payload.projectsReducer };
    }

    case actions.GET_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: action.payload,
      };

    case actions.GET_MESSAGE_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.SET_SORTLIST_ERROR:
      return{
        ...state,
        error:action.error
      }

    default:
      return { ...state };
  }
}
