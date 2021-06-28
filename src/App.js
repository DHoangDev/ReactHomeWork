import React, { Component } from 'react'

import Menu from "./RenderState/Menu";
import SelectCar from "./RenderState/SelectCar";
import ProductList from "./Products/ProductList";

import GlassSelect from "./HwGlassSelect/GlassSelect";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Menu />
        <SelectCar />
        <ProductList /> */}
        <GlassSelect />
      </div>
    )
  }
}
