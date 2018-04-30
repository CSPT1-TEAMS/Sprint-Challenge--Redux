import axios from 'axios'
import {
  FETCHING,
  CREATING,
  UPDATING,
  DELETING,
  SUCCESS,
  ERROR,
  EDITING,
  CANCEL_EDIT,
  INPUT_CHANGE,
} from './types' // so these are just strings that we designate as actions?
// strings that are created in another file?
const ROOT_URL = 'http://localhost:3333';
const successWithPayload = data => ({ type: SUCCESS, payload: data });
const sendErrorMessage = error => ({ type: ERROR, error: error });
export const inputChange = change => ({ type: INPUT_CHANGE, payload: change })

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING })
  axios.get(`${ROOT_URL}/smurfs`)
    .then(({ data }) => dispatch(successWithPayload(data)))
    .catch(error => dispatch(sendErrorMessage(error)))
}

export const addSmurf = smurf => dispatch => {
  dispatch({ type: CREATING })
  axios.post(`${ROOT_URL}/smurfs`, smurf)
    .then(({ data }) => dispatch(successWithPayload(data)))
    .catch(error => dispatch(sendErrorMessage(error)))
}

export const editSmurf = id => ({ type: EDITING, payload: id })
export const cancelEdit = () => ({ type: CANCEL_EDIT })

export const updateSmurf = smurf => dispatch => {
  const { id, name, age, height } = smurf;
