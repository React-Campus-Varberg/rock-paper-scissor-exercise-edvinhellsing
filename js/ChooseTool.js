import React from 'react';
import { render } from 'react-dom';

function ChooseTool(props) {
   return (
      <section className = "btn-section">
         <button className = "tool-btn" value = "Rock" onClick = { props.select }>Rock</button>
         <button className = "tool-btn" value = "Paper" onClick = { props.select }>Papers</button>
         <button className = "tool-btn" value = "Scissors" onClick = { props.select }>Scissors</button>
      </section>
   )
}

export default ChooseTool;