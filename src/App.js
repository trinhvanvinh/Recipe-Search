import React, {Component} from 'react';
import './App.css';
import {recipes} from "./tempList";
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetail';


class App extends Component {

    state={
      recipes:recipes,
      url:"https://www.food2fork.com/api/search?key=349711cc72ab5138db9810284f664853",
      details_id: 35382
    }

    async getRecipes(){
      try{
        const data = await fetch(this.state.url);
        const jsonData = await data.json();

        console.log(jsonData);
  
        this.setState({
          recipes: jsonData.recipes
        })
  
      }catch(err){
        console.log(err);
      }
      
    }

    componentDidMount(){
      this.getRecipes();
    }

    render(){
      console.log(this.state.recipes);
      return(
        <React.Fragment>
         {/* <RecipeList recipes={this.state.recipes} /> */}
          <RecipeDetails recipes={this.state.recipes} /> 
        </React.Fragment>
      )
    }
}

export default App;
