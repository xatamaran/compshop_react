import classes from './Header.module.css'
import Logo from '../../img/svg/Logo.svg'
import Nav from '../nav/nav'
import { NavLink } from 'react-router-dom'
function Header() {
	return (
		<header className={classes.header}>
			<div className={classes.header_nav}>
				<div className='wrapper'>
					<div className={classes.header_naw_content}>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive
									? `${classes.active} ${classes.header_logo_link}`
									: classes.header_logo_link
							}>
							<img className={classes.header_logo} src={Logo} alt='Logo' />
						</NavLink>

						<nav className={classes.header_nav_list}>
							<Nav nav_link='/' nav_name='Каталог' />
							<Nav nav_link='/personal_account' nav_name='Особистий кабінет' />
							<Nav nav_link='/about_us' nav_name='Про нас' />
						</nav>
					</div>
				</div>
			</div>

			<div className={classes.header_search}>
				<div className='wrapper'>
					<div className={classes.header_search_content}>
						<p className=''>Search</p>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
