import React,{Component} from 'react';
import './App.css';
import { connect } from 'react-redux'
import InvoiceList from './InvoiceList/InvoiceList'
import PropTypes from 'prop-types'
import { getInvoiceItems, getInvoiceSubtotal } from '../reducers'
import { invoiceActions } from '../redux-modules/invoice'

export class App extends Component {
	handleItemChange = (key, value, index) => {
		this.props.editItem(key, value, index)
	}
	render() {
		return (
			<div className='App'>
				<div className='App-header'>
					<h1>ITGlue Invoice Editor</h1>
				</div>
				<InvoiceList
					items={this.props.items}
					onAddItem={this.props.addItem}
					onEditItem={this.handleItemChange}
					onDeleteItem={this.props.deleteItem}
					subtotal={this.props.subtotal}
				/>
			</div>
		);
	}
}
App.propTypes = {
	subtotal: PropTypes.number,
	items: PropTypes.arrayOf(PropTypes.object),
	addItem: PropTypes.func,
	deleteItem: PropTypes.func,
	editItem: PropTypes.func
}
const mapStateToProps = (state) => ({
	subtotal: getInvoiceSubtotal(state),
	items: getInvoiceItems(state)
})
const mapDispatchToProps = {
	addItem: invoiceActions.addItem,
	deleteItem: invoiceActions.deleteItem,
	editItem: invoiceActions.editItem
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

