import React from 'react';
import Products from './Products';

const Product = props => {
	return (
		<div className="product">
			<img src={props.product.image} alt={`${props.product.title} book`} />

			<h1 className="title">{props.product.title}</h1>

			<p className="price">${props.product.price}</p>
			

			<button onClick={() => props.addItem(Product)}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
