import { combineReducers } from 'redux'
import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM }from './action-types'


const items = (state = [], { type, payload }) => {
	switch (type) {
		case ADD_ITEM:
			return  [...state, { ...payload }]
		case EDIT_ITEM:
			return state.map((item, index) =>
				index === payload.index ? { ...item, [payload.key]: payload.value } : item
			)
		case DELETE_ITEM:
			return state.filter( item => item !== state[payload]  )
		default:
			return state
	}
}
const invoice =  combineReducers({
	items
})
export default invoice
const invoiceTotals = (total, item) => total + (Number(item.price) * Number(item.quantity))

export const getSubtotal = state => state.items.reduce(invoiceTotals, 0)
export const getItems = state => state.items