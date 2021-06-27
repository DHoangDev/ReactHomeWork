import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        let img = this.props.product.image;
        let tenSanPham = this.props.product.name;
        let gia = this.props.product.price;

        return (
            <div className="col-md-3 my-3">
                <div className="card p-1 h-100 bg-dark text-white">
                    <img src={img} className="w-100"></img>
                    <div className="card-body">
                        <p>Name: {tenSanPham}</p>
                        <p>Price: {gia} USD</p>
                        <button className="btn btn-success">See more</button>
                    </div>
                </div>
            </div>
        )
    }
}
