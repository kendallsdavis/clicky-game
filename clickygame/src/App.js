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
    cats
  };


shuffleCats = () => {
  let reshuffle = this.state.cats
  for (let i = reshuffle.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        var itemAtIndex = reshuffle[randomIndex];         
        reshuffle[randomIndex] = reshuffle[i]; 
        reshuffle[i] = itemAtIndex;
      }
  this.setState({
    cats: reshuffle
  })
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
