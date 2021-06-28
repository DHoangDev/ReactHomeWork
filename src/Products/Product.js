import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        let { product } = this.props;

        return (
            <div className="col-md-3 my-3">
                <div className="card p-1 h-100 bg-dark text-white">
                    <img src={product.image} className="w-100"></img>
                    <div className="card-body">
                        <p>Name: {product.name}</p>
                        <p>Price: {product.price} USD</p>
                        <button type="button" className="btn btn-success me-2">
                            See more
                        </button>
                        <button type="button" className="btn btn-danger" onClick={() => {
                            this.props.themGioHang(product)
                        }}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
