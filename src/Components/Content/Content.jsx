import classes from './Content.module.css'

function Content(props) {
	return (
		<div className={classes.content}>
			<div className='wrapper'>
				<div className={classes.text_content}>{props.nav_content}</div>
			</div>
		</div>
	)
}

export default Content
