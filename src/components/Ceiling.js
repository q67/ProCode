import React, { useState } from 'react';
import './Ceiling.css';
import Cell from './Cell.js';

const cellsQty = 15; // Cells quantity

function Ceiling() {
  
  const [allState, setAllState] = useState(true);
  const cellKeys = [];

  for (let i = 0; i < cellsQty; i++) {
    cellKeys[i] = `cell${i}`;
  }

  // console.log('ceiling allState:',allState); 

  const arrCells = cellKeys.map((item) => (
    <Cell key={item} value={allState} />
  ));

  function btnOnOff() {
    setAllState(!allState);
  }

  let btnText = allState ? "All powered" : "All disabled";

  return (
    <div className="ceiling">
      <button onClick={btnOnOff} className="mainBtn">{btnText}</button>
      {arrCells}
    </div>
  );
}

export default Ceiling;