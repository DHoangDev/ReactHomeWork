import React, { Component } from 'react'

export default class InfoProduct extends Component {
    render() {
        let { product } = this.props;

        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Gio Hang</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Ma SP</th>
                                        <th>Ten SP</th>
                                        <th>Hinh anh</th>
                                        <th>Don gia</th>
                                        <th>So luong</th>
                                        <th>Thanh tien</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        product.map((value, index) => {
                                            return <tr key={index}>
                                                <td>{value.id}</td>
                                                <td>{value.name}</td>
                                                <td><img className="w-25" src={value.image}></img></td>
                                                <td>{value.price}</td>
                                                <td></td>
                                                <td></td>
                                                <td><button className="btn btn-danger">Delete</button></td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
