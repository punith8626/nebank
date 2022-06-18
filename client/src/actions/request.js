import * as api from '../api/index';
import { CREATEREQUEST,REQUESTS,UPDATEREQUEST } from './types';


export const getRequests = () => async (dispatch) => {
    try {
        const { data } = await api.fetchRequests();
        dispatch({ type: REQUESTS, data });   
    } catch (error) {
        
    }
}
export const updateRequest = (id, request,router) => async (dispatch) => {
    try {
        request.status = 'completed';
        const { data } = await api.createRequest(request);
        const action = { type: UPDATEREQUEST, payload: data };
        dispatch(action);
        router('/dashboard')
        // router("/dashboard", { replace: true });
        // window.location.reload(false);

    } catch (error) {
        
    }
}

export const createnewRequest = (request,router) => async (dispatch) => {
    try {
        request.status = 'pending';
        const { data } = await api.createRequest(request);
        const action = { type: CREATEREQUEST, payload: data };
        dispatch(action);
        router('/dashboard')
    } catch (error) {
        
    }
}