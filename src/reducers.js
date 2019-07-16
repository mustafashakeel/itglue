import { combineReducers } from 'redux'
import invoice, * as fromInvoice from './redux-modules/invoice'

export default combineReducers({
	invoice,
	//Reducers from other parts of the app
})

// Invoice
export const getInvoiceSubtotal = state => fromInvoice.getSubtotal(state.invoice)
export const getInvoiceItems = state => fromInvoice.getItems(state.invoice)