import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header.jsx'
import Content from './Components/Content/Content.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Catalog from './Components/Catalog/Catalog.jsx'
import Account from './Components/Account/Account.jsx'

function App(props) {
	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<Routes>
					<Route
						path='/'
						element={<Catalog catalogData={props.state.catalogPage.catalogData} />}
					/>
					<Route
						path='/personal_account'
						element={
							<Account
								state={props.state}
								personal_account='Особистий кабінет'
								dispatch={props.dispatch}
							/>
						}
					/>
					<Route path='/about_us' element={<Content nav_content='Про нас' />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App

