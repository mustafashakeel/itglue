import React from 'react'
import InvoiceList from './InvoiceList'
import InvoiceItem from '../InvoiceItem'
import toJson from 'enzyme-to-json'

describe('InvoiceList', () => {

	let props
	beforeEach(() => {
		props = {
			items: [],
			onAddItem: jest.fn(),
			onDeleteItem: jest.fn(),
			onEditItem: jest.fn(),
		}
	})

	it('should render the component', () => {
		const wrapper = shallow(<InvoiceList {...props}/>)
		expect(toJson(wrapper)).toMatchSnapshot()
	})

	it('should render the component with items', () => {
		props.items = [
			{name: 'Test', price: 0, quantity: 0}
		]
		const wrapper = shallow(<InvoiceList {...props}/>)
		expect(toJson(wrapper)).toMatchSnapshot()
		expect(wrapper.find(InvoiceItem).length).toBe(1)
	})

	it('should contain InvoiceSummary', () => {
		const wrapper = shallow(<InvoiceList {...props}/>)

		expect(wrapper.find('div.invoice-summary').length).toBe(1)
	})

	it('should call onAddItem when button is clicked', () => {
		const wrapper = shallow(<InvoiceList {...props}/>)

		wrapper.find('button.add-item').simulate('click')

		expect(props.onAddItem).toBeCalled()
	})

	it('should call onDeleteItem with index when InvoiceItem delete is triggered', () => {
		props.items = [
			{name: 'Test', price: 0, quantity: 0}
		]
		const wrapper = shallow(<InvoiceList {...props}/>)

		wrapper.find(InvoiceItem).simulate('delete')

		expect(props.onDeleteItem).toBeCalledWith(0)
	})


})