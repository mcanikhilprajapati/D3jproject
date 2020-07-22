import * as types from './actionTypes';
import { apiLoadingStart, apiLoadingStop } from '../global/actions';

export const submitFormData = (params,{ SuccessCallback}) => {

    return (dispatch) => {
        dispatch(apiLoadingStart());
        dispatch({ type: types.FORM_DATA_SUCCESS, payload: params })
        SuccessCallback(params);
        dispatch(apiLoadingStop());
    }
};