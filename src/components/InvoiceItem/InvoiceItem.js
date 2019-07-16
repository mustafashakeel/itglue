import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './InvoiceItem.css'

class InvoiceItem extends Component {

	onEditField = ({ target }) => {
		this.props.onEdit(target.name, target.value, this.props.id)
	}

	render() {

		const { name, quantity, price } = this.props.item

		return (
			<div className='invoice-item'>
				<input name='name' defaultValue={name} onChange={this.onEditField} placeholder='Enter Name'/>
				<input name='quantity' defaultValue={quantity} onChange={this.onEditField} placeholder='Enter Quantity'/>
				<span>$ <input name='price' defaultValue={price} onChange={this.onEditField} placeholder='Enter Price'/></span>
				<div className='item-total'>$ {price * quantity}</div>
				<button className='delete-button' onClick={this.props.onDelete}>X</button>
			</div>
		)
	}
}

InvoiceItem.propTypes = {
	onEdit: PropTypes.func,
	onDelete: PropTypes.func,
	item: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		quantity: PropTypes.number,
		price: PropTypes.number
	}),
	totalPrice: PropTypes.number
}

export default InvoiceItem