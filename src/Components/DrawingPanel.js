import React, { useRef } from 'react';
import { exportComponentAsPNG } from 'react-component-export-image';
import '../App.css'

import Row from './Row';

export default function DrawingPanel({ width, height, selectedColor }) {
  const panelRef = useRef();

  let rows = [];

  for (let index = 0; index < height; index++) {
    rows.push(<Row key={index} width={width} selectedColor={selectedColor} />);
  }

  return (
    <div id="drawingPanel">
      <div id="pixels" ref={panelRef}>
        {rows}
      </div>
      <button onClick={() => exportComponentAsPNG(panelRef)} className="button">
        Export as PNG
      </button>
    </div>
  );
}
