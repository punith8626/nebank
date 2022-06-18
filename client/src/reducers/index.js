import { combineReducers } from 'redux';
import authReducer from './auth';
import requestsReducer from './requests';
import itemsReducer from './items';
import categoriesReducer from './categories';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";


/**
 * persist store "auth"
 */
const persistAuthConfig = {
    key: "auth",
    storage,
    whitelist: ["authData"]
};
/**
 * persist store "categories"
 */
 const persistCatConfig = {
    key: "categories",
    storage,
    whitelist: ["categoriesList"]
};
/**
 * persist store "items"
 */
 const persistItemConfig = {
    key: "items",
    storage,
    whitelist: ["itemsList"]
};
/**
 * persist store "auth"
 */
 const persistRequestConfig = {
    key: "requests",
    storage,
    whitelist: ["requestsList"]
};

export default combineReducers({
    auth: persistReducer(persistAuthConfig, authReducer),
    requests: persistReducer(persistRequestConfig, requestsReducer),
    items: persistReducer(persistItemConfig, itemsReducer),
    categories: persistReducer(persistCatConfig, categoriesReducer),
    // contacts: persistReducer(persistcontactConfig, contactReducer),
    // status: persistReducer(persiststatusConfig, statusReducer),
    // users: persistReducer(persistuserConfig, userReducer),  
    // community: persistReducer(persistcommunityConfig, communityReducer),
    // customercategory: persistReducer(persistcustomercategoryConfig, customercategoryReducer),
    // notify: notifyReducer,
    // loader: loaderReducer
})
