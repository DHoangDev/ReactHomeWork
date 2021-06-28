import React, { Component } from 'react'

export default class Selection extends Component {

    state = {
        srcImg: "./glassesImage/v1.png"
    }

    setImg = (val) => {
        this.setState({
            srcImg: "./glassesImage/v" + val + ".png"
        })
    }

    render() {
        return (
            <div className="container-md">
                <div className="row my-4">
                    <div className="col-6">
                        <div className="card w-50 mx-auto" style={{
                            backgroundImage: "url(./glassesImage/model.jpg)",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            width: "100%",
                            height: "370px"
                        }}>
                            <img src={this.state.srcImg} className="w-50" style={{
                                margin: "92px 0 0 78px"
                            }}></img>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card w-50 mx-auto" style={{
                            backgroundImage: "url(./glassesImage/model.jpg)",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            width: "100%",
                            height: "370px"
                        }}></div>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="card h-100 py-3">
                        <div className="row">
                            <div className="h-75 col-2 my-2">
                                <button className="btn h-100" onClick={() => { this.setImg(1) }} type="button"><img className="w-100 h-100" src={"./glassesImage/v1.png"}></img></button>
                            </div>
                            <div className="h-75 col-2 my-2">
                                <button className="btn h-100" onClick={() => { this.setImg(2) }} type="button"><img className="w-100 h-100" src={"./glassesImage/v2.png"}></img></button>
                            </div>
                            <div className="h-75 col-2 my-2">
                                <button className="btn h-100" onClick={() => { this.setImg(3) }} type="button"><img className="w-100 h-100" src={"./glassesImage/v3.png"}></img></button>
                            </div>
                            <div className="h-75 col-2 my-2">
                                <button className="btn h-100" onClick={() => { this.setImg(4) }} type="button"><img className="w-100 h-100" src={"./glassesImage/v4.png"}></img></button>
                            </div>
                            <div className="h-75 col-2 my-2">
                                <button className="btn h-100" onClick={() => { this.setImg(5) }} type="button"><img className="w-100 h-100" src={"./glassesImage/v5.png"}></img></button>
                            </div>
                            <div className="h-75 col-2 my-2">
                                <button className="btn h-100" onClick={() => { this.setImg(6) }} type="button"><img className="w-100 h-100" src={"./glassesImage/v6.png"}></img></button>
                            </div>
                            <div className="h-75 col-2 my-2">
                                <button className="btn h-100" onClick={() => { this.setImg(7) }} type="button"><img className="w-100 h-100" src={"./glassesImage/v7.png"}></img></button>
                            </div>
                            <div className="h-75 col-2 my-2">
                                <button className="btn h-100" onClick={() => { this.setImg(8) }} type="button"><img className="w-100 h-100" src={"./glassesImage/v8.png"}></img></button>
                            </div>
                            <div className="h-75 col-2 my-2">
                                <button className="btn h-100" onClick={() => { this.setImg(9) }} type="button"><img className="w-100 h-100" src={"./glassesImage/v9.png"}></img></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
