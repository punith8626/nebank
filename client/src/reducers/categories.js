import * as actiontype from "../actions/types";
const initialState = {
    categoriesList: []
}
const categoriesReducer = (state = initialState, action) => {

    switch (action.type) {
        case actiontype.CATEGORIES: {
            return {
                ...state,
                categoriesList: action.data
            };
        }
        
        default:
            return state;
    }
}
export default categoriesReducer;