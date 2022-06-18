import * as actiontype from "../actions/types";
const initialState = {
    requestsList: []
}
const requestsReducer = (state = initialState, action) => {

    switch (action.type) {
        case actiontype.REQUESTS: {
            return {
                ...state,
                requestsList: action.data
            };
        }
        case actiontype.CREATEREQUEST:{
            return {
                ...state,
                requestsList: [...action.payload]
            };
        }
        
        default:
            return state;
    }
}
export default requestsReducer;