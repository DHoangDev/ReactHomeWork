import React, { Component } from 'react'

import Banner from './Banner/Banner'
import Item from './Item/Item'

export default class Body extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Item />
            </div>
        )
    }
}
