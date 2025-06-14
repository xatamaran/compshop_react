import React from 'react'
import classes from './Account.module.css'

let newId = React.createRef()
let newItem = React.createRef()

function Account(props) {
	let onButtonClick = () => {
		props.addItem()
	}
	let onTextChang = () => {
		let text1 = newId.current.value
		let text2 = newItem.current.value
		props.onPostChang(text1, text2)
	}

	return (
		<div className={classes.personal_account}>
			<div className='wrapper'>
				<div className={classes.personal_account_content}>
					<div className={classes.personal_account_content}>
						{props.catalogPage.catalogData.map(catalogItem => (
							<div>{catalogItem.productName}</div>
						))}
						{props.personal_account}
						<input
							onChange={onTextChang}
							ref={newId}
							value={props.catalogPage.textarea.text1}></input>
						<textarea
							onChange={onTextChang}
							ref={newItem}
							value={props.catalogPage.textarea.text2}></textarea>
						<button onClick={onButtonClick}>Add</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Account
