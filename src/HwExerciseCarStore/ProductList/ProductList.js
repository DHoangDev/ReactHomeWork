import React, { Component } from 'react'

import ProductDetail from './ProductDetail/ProductDetail';
import ProductItem from './ProductItem/ProductItem'

export default class ProductList extends Component {

    array = this.props.products;

    state = {
        arrayProduct: []
    }

    show(val) {
        let tempProduct = { ...val };
        let tempArray = [];

        tempArray.push(tempProduct)

        this.setState({
            arrayProduct: tempArray
        })
    }

    render() {
        return (
            <div className="container-md">
                <ProductDetail content={this.state.arrayProduct} />
                <div>
                    <h3><b>Cars List</b></h3>
                </div>
                <div className="row">
                    {
                        this.array.map((element, index) => {
                            return <ProductItem product={element} key={index} show={this.show} />
                        })
                    }
                </div>
            </div>
        )
    }
}
