import React from 'react'
import classes from './Account.module.css'
import { addPostActionCreator, addTextActionCreator } from '../../redux/accountPage-reducer'

let newId = React.createRef()
let newItem = React.createRef()

function Account(props) {
	let addItem = () => {
		props.dispatch(addPostActionCreator())
	}
	let OnPostChang = () => {
		let text1 = newId.current.value
		let text2 = newItem.current.value
		props.dispatch(addTextActionCreator(text1, text2))
	}
	return (
		<div className={classes.personal_account}>
			<div className='wrapper'>
				<div className={classes.personal_account_content}>
					<div className={classes.personal_account_content}>
						{props.state.catalogPage.catalogData.map(catalogItem => (
							<div>{catalogItem.productName}</div>
						))}
						{props.personal_account}
						<textarea
							onChange={OnPostChang}
							ref={newId}
							value={props.state.catalogPage.textarea.text1}></textarea>
						<textarea
							onChange={OnPostChang}
							ref={newItem}
							value={props.state.catalogPage.textarea.text2}></textarea>
						<button onClick={addItem}>Add</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Account
