import classes from './nav.module.css'

import { NavLink } from 'react-router'

function Nav(props) {
	return (
		<>
			<div className={classes.header_nav_item}>
				<NavLink
					to={props.nav_link}
					className={({ isActive }) =>
						isActive ? `${classes.active} ${classes.header_nav_link}` : classes.header_nav_link
					}>
					{props.nav_name}
				</NavLink>
			</div>
		</>
	)
}

export default Nav
