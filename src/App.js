import React, { Component }  from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';

const API_KEY = "4f20ec295c0dbd6560c53fb05beb01de";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       recipes : []
    }
  }
  
  getRecipe= async(e)=>{
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`);
    const data = await api_call.json();
    
    this.setState({recipes : data.recipes});
    console.log("data",this.state.recipes);
  }

  componentDidMount= async()=> {
    if(localStorage.getItem("recipes")){
      const json = localStorage.getItem("recipes");
      const recipes = JSON.parse(json);
      this.setState({recipes: recipes});
    }else{
      const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}`);
      const data = await api_call.json();
      
      this.setState({recipes : data.recipes});
    }
    
  }
  

  componentDidUpdate(){
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Recipe-Search</h1>
      </header>
      <Form getRecipe={this.getRecipe}/>
      <Recipes recipes={this.state.recipes}/>

    </div>
  )};
}

export default App;
