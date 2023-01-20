import React, { useState } from 'react';
import { CompactPicker } from 'react-color';

import DrawingPanel from './DrawingPanel';
import '../App.css';

export default function Editor() {
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState('Start drawing');
  const [selectedColor, setColor] = useState('#f44336');

  function initializeDrawingPanel() {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);

    buttonText === 'Start drawing'
      ? setButtonText('Reset')
      : setButtonText('Start drawing');
  }

  function changeColor(color) {
    setColor(color.hex);
  }

  return (
    <div id="editor">
      <h1>Pixel Drawer</h1>
      {hideDrawingPanel && <h2>Dimensions: </h2>}
      {hideDrawingPanel && (
        <div id="options">
          <div className="option">
            <input
              type="number"
              className="panelInput"
              defaultValue={panelWidth}
              onChange={(event) => {
                setPanelWidth(event.target.value);
              }}
            />
            <span>Width</span>
          </div>
          <div className="option">
            <input
              type="number"
              className="panelInput"
              defaultValue={panelHeight}
              onChange={(event) => {
                setPanelHeight(event.target.value);
              }}
            />
            <span>Height</span>
          </div>
        </div>
      )}

      <button onClick={initializeDrawingPanel} className="button">
        {buttonText}
      </button>

      {hideOptions && (
        <div className="picker-container">
        <CompactPicker
          color={selectedColor}
          onChangeComplete={changeColor}
          
        /></div>
      )}

      {hideOptions && (
        <DrawingPanel
          width={panelWidth}
          height={panelHeight}
          selectedColor={selectedColor}
        />
      )}
    </div>
  );
}
