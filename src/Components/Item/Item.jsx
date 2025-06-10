import classes from './Item.module.css'

function Item(props) {
	return (
		<div className={classes.item}>
			<h2>{props.id}</h2>
			<h3>{props.productName}</h3>
		</div>
	)
}

export default Item