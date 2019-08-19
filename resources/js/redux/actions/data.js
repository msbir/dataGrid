import {
  ADD_DATA,
  UPDATE_DATA,
  DELETE_DATA,
  IS_LOADING,
  HAS_ERROR
} from './types';

export const siteAddData = (formData) => {

  return function(dispatch) {
    return axios.post(process.env.MIX_API_URL+'data/', formData,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(({ data }) => {
      dispatch(siteAddDataSuccess(data.data));
    })
    .catch((data) => {
      dispatch(datasHasError(data.data));
    });
  };
};

export const siteUpdateData = (data) => {
  return function(dispatch){
    return axios.put(process.env.MIX_API_URL+'data/'+data.PassengerId,data)
    .then(({ data }) => {
      dispatch(siteUpdateDataSuccess(data.data));
    })
    .catch((data) => {
      dispatch(datasHasError(data.data));
    });
  }
};

export const siteDeleteData = (data) => {
  return function(dispatch){
    return axios.delete(process.env.MIX_API_URL+'data/'+data.PassengerId,data)
    .then(({ response }) => {
      dispatch(siteDeleteDataSuccess(data));
    })
    .catch((response) => {
      dispatch(datasHasError(response.data));
    });
  }
}

export function siteAddDataSuccess(data){
  return {
    type: ADD_DATA,
    payload: data
  };
}

export function siteUpdateDataSuccess(data) {
 return {
    type: UPDATE_DATA,
    payload: data
  };
}

export function siteDeleteDataSuccess(data) {
  return {
    type: DELETE_DATA,
    payload: data
  };
}

export function dataIsLoading(bool){
  return {
    type: IS_LOADING,
    isLoading: bool
  };
}

export function datasHasError(bool){
  return {
    type: HAS_ERROR,
    hasError: bool
  };
}