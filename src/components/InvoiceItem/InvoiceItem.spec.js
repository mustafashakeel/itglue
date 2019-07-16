import React from 'react'
import InvoiceItem from './InvoiceItem'
import toJson from 'enzyme-to-json'

describe('InvoiceItem', () => {

	let props
	beforeEach(() => {
		props = {
			onEdit: jest.fn(),
			onDelete: jest.fn(),
			id: 1,
			item: {
				name: 'Test',
				quantity: 1,
				price: 24
			}
		}
	})

	it('should render the component', () => {
		const wrapper = shallow(<InvoiceItem {...props}/>)
		expect(toJson(wrapper)).toMatchSnapshot()
	})

	it('should should calculate the total price from the item information', () => {
		const wrapper = shallow(<InvoiceItem {...props}/>)

		expect(wrapper.find('div.item-total').text()).toBe('$ 24')
	})

	describe('onEditField', () => {

		it('should be called on name change', () => {
			const wrapper = shallow(<InvoiceItem {...props}/>)
			const mockEvent = { target: { name: 'name', value: 'Test' } }

			wrapper.find('input[name="name"]').simulate('change', mockEvent)

			expect(props.onEdit).toBeCalledWith('name', 'Test', 1)
		})

		it('should be called on quantity change', () => {
			const wrapper = shallow(<InvoiceItem {...props}/>)
			const mockEvent = { target: { name: 'quantity', value: 10 } }

			wrapper.find('input[name="quantity"]').simulate('change', mockEvent)

			expect(props.onEdit).toBeCalledWith('quantity', 10, 1)
		})

		it('should be called on price change', () => {
			const wrapper = shallow(<InvoiceItem {...props}/>)
			const mockEvent = { target: { name: 'price', value: 10 } }

			wrapper.find('input[name="price"]').simulate('change', mockEvent)

			expect(props.onEdit).toBeCalledWith('price', 10, 1)
		})
	})

	it('should call onDelete when button is clicked', () => {
		const wrapper = shallow(<InvoiceItem {...props}/>)

		wrapper.find('button').simulate('click')

		expect(props.onDelete).toBeCalled()
	})
})