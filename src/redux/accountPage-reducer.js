const ADD_POST = 'ADD-POST'
const ADD_TEXT = 'ADD-TEXT'

let initialState = {
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
}

const accountPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				key: state.textarea.text1,
				id: state.textarea.text1,
				productName: state.textarea.text2,
			}
			state.catalogData.push(newPost)
			state.textarea.text1 = ''
			state.textarea.text2 = ''
			return state
		case ADD_TEXT:
			state.textarea.text1 = action.text1
			state.textarea.text2 = action.text2
			return state
		default:
			return state
	}
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const addTextActionCreator = (text1, text2) => ({
	type: ADD_TEXT,
	text1: text1,
	text2: text2,
})

export default accountPageReducer
