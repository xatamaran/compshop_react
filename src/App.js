import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header.jsx'
import Content from './Components/Content/Content.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Catalog from './Components/Catalog/Catalog.jsx'
import AccountContainer from './Components/Account/AccountContainer.jsx'

function App(props) {
	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<Routes>
					<Route path='/' element={<Catalog store={props.store} />} />
					<Route
						path='/personal_account'
						element={<AccountContainer personal_account='Особистий кабінет' store={props.store} />}
					/>
					<Route path='/about_us' element={<Content nav_content='Про нас' />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App
