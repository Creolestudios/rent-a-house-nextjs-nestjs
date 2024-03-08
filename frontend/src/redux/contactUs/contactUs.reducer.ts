import { HYDRATE } from 'next-redux-wrapper';
import actions from './contactUs.action';

const initState = {
  error: '',
  message: '',
};

export default function contactUsReducer(state = initState, action: any) {
  switch (action.type) {
    case HYDRATE: {
      return { ...action.payload.projectsReducer };
    }

    case actions.SEND_CONTACTUS_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };

    case actions.SEND_CONTACTUS_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return { ...state };
  }
}
