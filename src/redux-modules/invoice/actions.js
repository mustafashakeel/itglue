import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM } from './action-types'

export const addItem = () => dispatch => {
	dispatch({
		type: ADD_ITEM,
		payload: {
			name: '',
			quantity: '',
			price: ''
		}
	})
}
export const editItem = (key, value, index) => dispatch => {
	dispatch({
		type: EDIT_ITEM,
		payload: { key, value, index }
	})
}
export const deleteItem = (index) => dispatch => {
	dispatch({
		type: DELETE_ITEM,
		payload: index
	})
}

