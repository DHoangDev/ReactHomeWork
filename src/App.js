import React, { Component } from 'react'

// import Menu from "./RenderState/Menu";
// import SelectCar from "./RenderState/SelectCar";
// import ProductList from "./Products/ProductList";

import ExerciseCarStore from './HwExerciseCarStore/ExerciseCarStore';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Menu />
        <SelectCar />
        <ProductList /> */}
        <ExerciseCarStore />
      </div>
    )
  }
}
