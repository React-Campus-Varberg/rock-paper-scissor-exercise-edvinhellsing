import React from 'react';
import ReactDOM from 'react-dom';

import ChooseTool from "./ChooseTool";
import ChooseChamp from "./ChooseChamp";

/**
 * a, Class component which renders two components and keeps an eye on state, which holds the user's choice and the machine's random choice
 * b, A functional component which renders different moves
 * c, A functional component which display's the champ
 */

class App extends React.Component {
   constructor() {
      super();

      this.state = {
         user: '',
         machine: ''
      }

      this.handleClick = this.handleClick.bind(this);
   }

   randomMachineTool() {
      let machineTool = '';
      const randomNumber = Math.round(Math.random() * 2);

      if (randomNumber == 0) {
         machineTool = "Rock";
      }
      else if (randomNumber == 1) {
         machineTool = "Paper";
      }
      else if (randomNumber == 2) {
         machineTool = "Scissors";
      }

      this.setState( { machine: machineTool });
   }

   handleClick(event) {
      this.setState({ user: event.target.value })

      this.randomMachineTool();
   }

   render() {
      return (
         <article>
            <section>
               <h1>Rock Paper Scissors</h1>
            </section>
            <section className = "rules-section">
               <h2>Game Rules</h2>
               <p>Play the classic game Rock Paper Scissors against the wachine. Just press a button, and see if you can beat the machine.</p>
            </section>
            <section>
               <ChooseTool select = { this.handleClick }/>
               <ChooseChamp user = { this.state.user } machine = { this.state.machine } />
            </section>
         </article>
      )
   }
}

ReactDOM.render(<App />, document.getElementById('root'));