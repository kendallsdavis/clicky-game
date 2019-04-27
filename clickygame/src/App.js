import React, { Component } from "react";
import './App.css';
import cats from "./cats.json";
import CatCard from "./components/catcards";
import Wrapper from "./components/wrapper/index";
import Title from "./components/title";
import Score from "./components/score";


class App extends Component {
  // Setting this.state.cats to the cats json array
  state = {
    cats: cats,
    score: 0,
    guessed: []
  };

  

// this function will be called each time a cat image is clicked. The click event passes the id of the cat selected 
// into the function
shuffleCats = (id) => {
  
  // check and see if the cat guessed has already been guessed. If it has, reset the array of guesses to empty and the score to 0
  if(this.state.guessed.includes(id)){
    console.log(id)
    console.log(this.state.guessed)
    console.log("Game Over!");
    this.setState({
    guessed:[],
    score: 0
    })
  } else {
    // if it hasn't, push the photo id into the array of guesses and shuffle the cats
    this.state.guessed.push(id)
  let reshuffle = this.state.cats
  for (let i = reshuffle.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        var itemAtIndex = reshuffle[randomIndex];         
        reshuffle[randomIndex] = reshuffle[i]; 
        reshuffle[i] = itemAtIndex;
      }
      console.log(id)
      
      console.log(this.state.guessed)
  this.setState({
    cats: reshuffle,
    score: this.state.score+1
  })
  console.log(this.state)
}
};




// Map over this.state.cats and render a CatCard component for each cat object
render() {
  return (
    <Wrapper>
      <Title>Fat Cats</Title>
      {this.state.cats.map(cat => (
        <CatCard
          shuffleCats={this.shuffleCats}
          id={cat.id}
          key={cat.id}
          name={cat.name}
          image={cat.image}
          clicked={0}
        />
      ))}
    </Wrapper>
  );
}
}



export default App;
