import * as api from '../api/index';
// import { hideLoader, showLoader } from './loader';
// import { showNotification } from './notification';
import { AUTH, LOGOUT,REQUESTS,CATEGORIES,ITEMS } from './types';


export const signin = (formData, router) => async (dispatch) => {
    try {
        // dispatch(showLoader());
        let { data } = await api.signIn(formData);        
        dispatch({ type: AUTH, data });

        let items = await api.fetchItems();
        // debugger
        dispatch({ type: ITEMS, data:items.data });
        
        let categories = await api.fetchCategories();
        dispatch({ type: CATEGORIES, data:categories.data });

        let requests = await api.fetchRequests();
        dispatch({ type: REQUESTS, data:requests.data });

        // dispatch(hideLoader());
        router('/dashboard');        
        // dispatch(
        //     showNotification({
        //         notifyType: "Success",
        //         notifyProps: {
        //             title: "Login",
        //             message: `Login Successfully`,
        //             classname: "bg-success"
        //         }
        //     })
        // );
    } catch (error) {
        // dispatch(hideLoader());
        // dispatch(
        //     showNotification({
        //         notifyType: "error",
        //         notifyProps: {
        //             title: "Error",
        //             message: `Error while signin ! [${error.message}]`,
        //             classname: "bg-danger"
        //         }
        //     })
        // );
    }
}
export const logout = (router) => async (dispatch) => {
    localStorage.removeItem('profile');
    dispatch({ type: LOGOUT });
    router.push('/');
}