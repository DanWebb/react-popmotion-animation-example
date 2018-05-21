import React, { Component } from 'react';
import Box from './Box';

class App extends Component {
	boxes = [
		{size: 10, x: 100},
		{size: 50, x: 120},
		{size: 100, x: 190},
		{size: 200, x: 320},
		{size: 400, x: 560}
	]

  render() {
    return this.boxes.map(box => <Box key={box} {...box}/>);
  }
}

export default App;
