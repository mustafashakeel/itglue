import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InvoiceItem from '../InvoiceItem'
import './InvoiceList.css'
const TAX_RATE= 0.05;
class InvoiceList extends Component {
	

	render() {
		return (
			<div className='invoice-editor'>
				<div className='invoice-header'>
					<div>Item</div>
					<div>Quantity</div>
					<div>Price</div>
					<div>Total</div>
				</div>

				{this.props.items.map((item, index) => (
					<InvoiceItem key={index}
					             id={index}
					             item={item}
					             onEdit={this.props.onEditItem}
					             onDelete={() => this.props.onDeleteItem(index)}
					/>
				))}

				<button className='add-item' onClick={this.props.onAddItem}>
					Add Item
				</button>

				<div className='invoice-summary'>
					<div className='summary-headers'>
						<div>Subtotal</div>
						<div>Tax ({TAX_RATE * 100}%)</div>
						<div>Total</div>
					</div>

					<div>
						<span>$ {this.props.subtotal}</span>
						<span>$ {(this.props.subtotal * TAX_RATE).toFixed(2)}</span>
						<span>$ {(this.props.subtotal * (1 + TAX_RATE)).toFixed(2)}</span>
					</div>
				</div>
			</div>
		)
	}
}

InvoiceList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object),
	onAddItem: PropTypes.func,
	onDeleteItem: PropTypes.func,
	onEditItem: PropTypes.func
}

export default InvoiceList