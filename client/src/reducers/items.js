import * as actiontype from "../actions/types";
const initialState = {
    itemsList: []
}
const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actiontype.ITEMS: {
            return {
                ...state,
                itemsList: action.data
            };
        }
        
        default:
            return state;
    }
}
export default itemsReducer;