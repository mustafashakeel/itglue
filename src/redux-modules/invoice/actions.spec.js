import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { addItem, deleteItem, editItem } from './actions'
import { ITEM_ADD, ITEM_DELETE, ITEM_EDIT } from './action-types'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Invoice Actions', () => {

	let store

	beforeEach(() => {
		store = mockStore()
	})

	describe('addItem', () => {
		it('should dispatch an ITEM_ADD action', async () => {
			await store.dispatch(addItem())
			const expectedActions = [
				{ type: ITEM_ADD , payload: {name:'', price:'', quantity:''}}
			]
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	describe('deleteItem', () => {
		it('should dispatch an ITEM_DELETE action', async () => {
			await store.dispatch(deleteItem(0))
			const expectedActions = [
				{ type: ITEM_DELETE , payload: 0}
			]
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	describe('editItem', () => {
		it('should dispatch an ITEM_EDIT action', async () => {
			await store.dispatch(editItem('name', 1, 2))
			const expectedActions = [
				{ type: ITEM_EDIT , payload: {key: 'name', value: 1, index: 2}}
			]
			expect(store.getActions()).toEqual(expectedActions)
		})
	})
})