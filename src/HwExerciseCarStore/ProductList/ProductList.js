import React, { Component } from 'react'

import ProductDetail from './ProductDetail/ProductDetail';
import ProductItem from './ProductItem/ProductItem'

export default class ProductList extends Component {

    array = this.props.products;

    state = {
        product: []
    }

    changeToShow = (val) => {
        this.setState({
            product: val
        })
    }

    render() {
        return (
            <div className="container-md">
                <ProductDetail content={this.state.product} />
                <div>
                    <h3><b>Cars List</b></h3>
                </div>
                <div className="row">
                    {
                        this.array.map((element, index) => {
                            return <ProductItem product={element} key={index} changeToShow={this.changeToShow} />
                        })
                    }
                </div>
            </div>
        )
    }
}
