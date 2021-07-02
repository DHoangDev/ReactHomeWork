import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {

        let { product } = this.props;

        return (
            <div className="col-3">
                <div className="card">
                    <img src={product.img}></img>
                    <div className="card-body bg-dark text-light p-3">
                        <p>Name: {product.name}</p>
                        <p>Price: {product.price} $</p>
                        <button type="button" className="btn btn-primary" onClick={() => { this.props.changeToShow(product) }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Launch demo modal
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
