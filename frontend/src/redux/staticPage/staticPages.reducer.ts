import { HYDRATE } from 'next-redux-wrapper';
import actions from './staticPages.action';

const initState = {
  error: '',
  pageContent: '',
};

export default function staticPageReducer(state = initState, action: any) {
  switch (action.type) {
    case HYDRATE: {
      return { ...action.payload.projectsReducer };
    }

    case actions.CONTENT_SUCCESS:
      return {
        ...state,
        pageContent: action.payload.content,
      };

    case actions.CONTENT_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return { ...state };
  }
}
