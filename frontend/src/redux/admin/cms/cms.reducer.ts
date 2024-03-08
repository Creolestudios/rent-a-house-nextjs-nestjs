import { HYDRATE } from "next-redux-wrapper";
import actions from "./cms.action";

const initState = {
  error: "",
  email: "",
  message: "",
  priceFaq:'',
  faqDetails:'',
  cmsDetails: [],
  allCMS: [],
  content:[],
  pageContent:''
}; 

export default function cmsReducer(state = initState, action: any) {
  switch (action.type) {
    case HYDRATE: {
      return { ...action.payload.projectsReducer };
    }
    case actions.CREATE_CMS_PAGE_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };

    case actions.CREATE_CMS_PAGE_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case actions.GET_ALL_CMS_PAGE_SUCCESS:
      return {
        ...state,
        allCMS: action.payload,
      };

    case actions.GET_ALL_CMS_PAGE_ERROR:
      return {
        ...state,
        error: action.error,
      };


    case actions.GET_ONE_CMS_PAGE_SUCCESS:
      if(action.payload[0].identifier === 'pricing'){
        return{
          ...state,
          cmsDetails: action.payload,
          pageContent:action.payload[0].content

        }
      }
      if(action.payload[0].identifier === 'faq'){
        return{
          ...state,
          faqDetails:action.payload[0].content,
          cmsDetails: action.payload,
        }
      }
      if(action.payload[0].identifier === 'home'){
        return {
          ...state,
          cmsDetails: action.payload,
          pageContent:action.payload[0].content
        };
      }
      
      return {
        ...state,
        cmsDetails: action.payload,
      };

    case actions.GET_ONE_CMS_PAGE_ERROR:
      return {
        ...state,
        error: action.error,
      };

      
    case actions.UPDATE_CMS_PAGE_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };

    case actions.UPDATE_CMS_PAGE_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case actions.REMOVE_CMS_PAGE_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };

    case actions.REMOVE_CMS_PAGE_ERROR:
      return {
        ...state,
        error: action.error,
      };
    // case actions.ADD_CONTENT:
    //   return {
    //     ...state,
    //     content: action.payload,
    //   };

      case actions.CONTENT_SUCCESS:
        // if(action.payload.identifier === 'pricing'){
        //   return {
        //     ...state,
        //     priceFaq: action.payload.content,
        //   };
        // }
        if(action.payload.identifier === 'faq'){
          return {
            ...state,
            faqDetails: action.payload.content,
          };
        }
        else{
          return {
            ...state,
            pageContent: action.payload.content,
          };
        }
       
  
      case actions.CONTENT_ERROR:
        return {
          ...state,
          error: action.error,
        };
  
    default:
      return { ...state };
  }
}
