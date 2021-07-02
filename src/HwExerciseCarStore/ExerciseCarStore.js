import React, { Component } from 'react'

import ProductList from './ProductList/ProductList';

export default class ExerciseCarStore extends Component {

    products = [
        { id: 1, name: 'Black car', img: './products/black-car.jpg', price: 1000 },
        { id: 2, name: 'Red car', img: './products/red-car.jpg', price: 2000 },
        { id: 3, name: 'Silver car', img: './products/silver-car.jpg', price: 3000 },
        { id: 4, name: 'Steel car', img: './products/steel-car.jpg', price: 4000 }
    ];

    render() {
        return (
            <div>
                <ProductList products={this.products} />
            </div>
        )
    }
}
