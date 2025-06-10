import accountPageReducer from './accountPage-reducer'

let store = {
	_state: {
		catalogPage: {
			catalogData: [
				{ key: 1, id: 1, productName: 'Lenovo' },
				{ key: 2, id: 2, productName: 'DELL' },
				{ key: 3, id: 3, productName: 'Apple' },
				{ key: 4, id: 4, productName: 'LG' },
				{ key: 5, id: 5, productName: 'Samsung' },
				{ key: 6, id: 6, productName: 'OPO' },
				{ key: 7, id: 7, productName: 'Lenovo' },
				{ key: 8, id: 8, productName: 'DELL' },
				{ key: 9, id: 9, productName: 'Apple' },
				{ key: 10, id: 10, productName: 'LG' },
				{ key: 11, id: 11, productName: 'Samsung' },
				{ key: 12, id: 12, productName: 'OPO' },
				{ key: 13, id: 13, productName: 'OPO' },
			],
			textarea: {
				text1: '',
				text2: '',
			},
		},
	},
	_rerenderTree() {
		console.log('Hello')
	},
	getState() {
		return this._state
	},
	subscribe(observer) {
		this._rerenderTree = observer
	},
	dispatch(action) {
		this._state.catalogPage = accountPageReducer(this._state.catalogPage, action)
		this._rerenderTree()
	},
}

export default store
window.store = store
