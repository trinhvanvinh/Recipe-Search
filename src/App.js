import React, {Component} from 'react';
import './App.css';
import {recipes} from "./tempList";
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetail';


class App extends Component {

    state={
      recipes:recipes,
      url:"https://www.food2fork.com/api/search?key=e56c29f6a4ff14e4c3b51699ec87b746",
      base_url:'https://www.food2fork.com/api/search?key=e56c29f6a4ff14e4c3b51699ec87b746',
      details_id: 35389,
      pageIndex:1,
      search:'',
      query:'&q=',
      error:''
    }

    async getRecipes(){
      try{
        const data = await fetch(this.state.url);
        const jsonData = await data.json();

        console.log(jsonData);

        if(jsonData.recipes.length ===0){
          this.setState(()=>{
              return {error:'sorry, but your search did not return any results'}
          } );
        }else{
          this.setState(()=>{
            return {recipes:jsonData.recipes}
          })
        }
  
        // this.setState({
        //   recipes: jsonData.recipes
        // })
  
      }catch(err){
        console.log(err);
      }
      
    }

    componentDidMount(){
      this.getRecipes();
    }

    dispalyPage=(index)=>{
      switch(index){
        default: 
        case 1:
          return( <RecipeList
             recipes={this.state.recipes} 
             handleDetails={this.handleDetails}
             value={this.state.search}
             handleChange={this.handleChange}
             handleSubmit={this.handleSubmit}
             error={this.state.error}
             />  );
        case 0:
          return (<RecipeDetails 
            id={this.state.details_id}
             handleIndex= {this.handleIndex}
              /> );
      }
    }

    handleIndex = (index) =>{
      this.setState({
        pageIndex: index
      })
    }

    handleDetails = (index, id) =>{
      this.setState({
        pageIndex: index,
        details_id: id
      })
    }

    handleChange=(e)=>{
      var value=e;
      console.log("hello from handle change"+ value  );

      this.setState({
        search: e.target.value
      },()=>{
        console.log(this.state.search);
      });

    }

    handleSubmit=(e)=>{
      e.preventDefault();
      console.log("submit");

      const {base_url, query, search} = this.state;

      this.setState(()=>{
          return{
            url:base_url+query+search, search:""
          }
      }, ()=>{
        this.getRecipes();
      });

    }

    render(){
      
      return(
        <React.Fragment>
         
         {this.dispalyPage(this.state.pageIndex)}
           
        </React.Fragment>
      )
    }
}

export default App;
