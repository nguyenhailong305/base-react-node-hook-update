import { actionType } from "../../containers";

const { Items } = actionType;
const DEFAULT_STATE = {
  listItem: [],
  isFetching: false,
  isError: false,
  message: "",

};
export default function HrReducer(state = DEFAULT_STATE, { type, payload }) {
  switch (type) {
    case Items.GET_ITEMS_REQUEST:
   
      return {
        ...state,
        isFetching: true,
        isError: false,
        message: "",
      };
    case Items.GET_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listItem: payload.listData,
      };
 
     
      
    case Items.GET_ITEMS_FAILURE:
   
      return {
        ...state,
        isFetching: false,
        isError: true,
        message: payload.message,
      };
    default:
      return state;
  }
}
