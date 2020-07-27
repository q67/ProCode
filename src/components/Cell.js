import React from 'react';
import Lamp from './Lamp';
import './Cell.css';

// One cell can be without lamp

function Cell(props) {
  return (
    <div className="cell">
      <Lamp value={props.value}/>
    </div>
  );
}

export default Cell;