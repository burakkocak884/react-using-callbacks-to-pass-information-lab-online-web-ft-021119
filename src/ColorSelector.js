import React, { Component } from 'react';
//ColorSelectro wont work properly.
export default class ColorSelector extends Component {
  
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {

      return <div key={idx} className="color-swatch" style={{backgroundColor: str}} onClick={this.handleClick}/>
    })
  )


  handleClick = (event) =>  {this.props.setColor(event.target.attributes.alt.value)   } 



  
  
  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}
