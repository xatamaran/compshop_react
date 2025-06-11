import { addPostActionCreator, addTextActionCreator } from '../../redux/accountPage-reducer'
import Account from './Account'

function AccountContainer(props) {
	let addItem = () => {
		props.store.dispatch(addPostActionCreator())
	}
	let onPostChang = (text1, text2) => {
		props.store.dispatch(addTextActionCreator(text1, text2))
	}

	return (
		<Account
			personal_account={props.personal_account}
			catalogPage={props.store.getState().catalogPage}
			onPostChang={onPostChang}
			addItem={addItem}
		/>
	)
}

export default AccountContainer
