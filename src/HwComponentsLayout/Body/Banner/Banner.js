import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div className="container-md my-3">
                <div className="card px-3 py-5">
                    <h1>Lorem Ipsum !</h1>
                    <p className="my-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum </p>
                    <button className="btn btn-primary py-2" style={{ width: "175px" }}>Call to Action!</button>
                </div>
            </div>
        )
    }
}
