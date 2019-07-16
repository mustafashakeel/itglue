import invoice, * as fromInvoice from './reducer'
import { ITEM_ADD, ITEM_DELETE, ITEM_EDIT } from './action-types'


const DEFAULT_STATE = {
	items: [
		{name: 'Test', price: 10, quantity: 1}
	]
}

describe('invoice reducer', () => {
	it('should handle ITEM_ADD', () => {
		const mockItem = {name: 'Mock', price: 10, quantity: 1}

		expect(
			invoice([], {
				type: ITEM_ADD,
				payload: mockItem
			})
		).toEqual({items:[mockItem]})
	})

	it('should handle ITEM_DELETE', () => {
		expect(
			invoice(DEFAULT_STATE, {
				type: ITEM_DELETE,
				payload: 0
			})
		).toEqual({items:[]})
	})

	it('should handle ITEM_DELETE', () => {
		expect(
			invoice(DEFAULT_STATE, {
				type: ITEM_EDIT,
				payload: {key: 'name', value: 'new-name', index: 0}
			})
		).toEqual({items:[{name: 'new-name', price: 10, quantity: 1}]})
	})
})

describe('Invoice Selectors', () => {

	describe('getItems', () => {
		it('should get the items state', () => {
			expect(fromInvoice.getItems(DEFAULT_STATE)).toEqual(DEFAULT_STATE.items)
		})
	})

	describe('getSubtotal', () => {
		it('should get the subtotal from items in state', () => {
			expect(fromInvoice.getSubtotal(DEFAULT_STATE)).toBe(10)
		})
	})
})