import React, { Component } from 'react'

import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'

export default class ComponentsLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}
