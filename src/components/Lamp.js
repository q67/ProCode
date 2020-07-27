import React, { useState } from 'react';
import './Lamp.css';

function Lamp(props) {
  
  const [lampState, setLampState] = useState(false);

  let styleLamp = (lampState && props.value) ? "lamp lamp-active" : "lamp" ;  

  function lampOn() {
    setLampState(!lampState);
  };

  return (
    <div onClick={lampOn} className={styleLamp}>
    </div>
  );
}

export default Lamp;