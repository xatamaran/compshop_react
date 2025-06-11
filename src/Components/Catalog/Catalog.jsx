import classes from './Catalog.module.css'
import Item from '../Item/Item'

function Catalog(props) {
	let itemElements = props.store
		.getState()
		.catalogPage.catalogData.map(catalogItem => (
			<Item key={catalogItem.key} id={catalogItem.id} productName={catalogItem.productName} />
		))

	return (
		<div className={classes.catalog}>
			<div className='wrapper'>
				<div className={classes.catalog_content}>
					<div className={classes.catalog_categories}>categories</div>
					<div className={classes.catalog_filter}>filter</div>
					<div className={classes.catalog_item}>{itemElements}</div>
				</div>
			</div>
		</div>
	)
}

export default Catalog
