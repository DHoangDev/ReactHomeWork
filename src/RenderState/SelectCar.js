import React, { Component } from 'react'

export default class SelectCar extends Component {

    state = {
        srcImg: "./CarBasic/products/red-car.jpg"
    }

    setImg = (color) => {
        this.setState({
            srcImg: "./CarBasic/products/" + color + "-car.jpg"
        })
    }

    render() {
        return (
            <div className="container-md my-5">
                <div className="row">
                    <div className="col-5">
                        <div className="card"><img className="w-100" src={this.state.srcImg}></img></div>
                    </div>
                    <div className="col-7">
                        <div className="card p-3">
                            <div className="card-title">
                                <p className="text-primary"><b>Exterior Color</b></p>
                            </div>
                            <div className="card-content">
                                <div className="list-group">
                                    <button type="button" onClick={() => {
                                        this.setImg('black')
                                    }} className="list-group-item list-group-item-action">
                                        <span className="me-2"><img style={{ width: '40px' }} src="./CarBasic/icons/icon-black.jpg"></img></span>
                                        <span>Black Color</span>
                                    </button>
                                    <button type="button" onClick={() => {
                                        this.setImg('red')
                                    }} className="list-group-item list-group-item-action">
                                        <span className="me-2"><img style={{ width: '40px' }} src="./CarBasic/icons/icon-red.jpg"></img></span>
                                        <span>Red Color</span>
                                    </button>
                                    <button type="button" onClick={() => {
                                        this.setImg('silver')
                                    }} className="list-group-item list-group-item-action">
                                        <span className="me-2"><img style={{ width: '40px' }} src="./CarBasic/icons/icon-silver.jpg"></img></span>
                                        <span>Silver Color</span>
                                    </button>
                                    <button type="button" onClick={() => {
                                        this.setImg('steel')
                                    }} className="list-group-item list-group-item-action">
                                        <span className="me-2"><img style={{ width: '40px' }} src="./CarBasic/icons/icon-steel.jpg"></img></span>
                                        <span>Steel Color</span>
                                    </button>
                                </div>
                            </div>
                            <div className="card-footer">
                                <p className="text-primary"><b>Wheels</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}