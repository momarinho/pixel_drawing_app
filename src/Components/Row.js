import React from 'react';

import Pixel from './Pixel';

export default function Row({ width, selectedColor }) {
  let pixels = [];

  for (let index = 0; index < width; index++) {
    pixels.push(<Pixel key={index} selectedColor={selectedColor} />);
  }

  return <div className="row">{pixels}</div>;
}
