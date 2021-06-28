import React, { Component } from 'react'

import Header from './Header/Header'
import Selection from './Selection/Selection'

export default class GlassSelect extends Component {
    render() {
        return (
            <div style={{
                backgroundImage: "url(./glassesImage/background.jpg)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "150vh"
            }}>
                <div style={{
                    backgroundColor: "#00000036",
                    height: "100%"
                }}>
                    <Header />
                    <Selection />
                </div>
            </div>
        )
    }
}
