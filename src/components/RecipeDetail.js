import React, { Component } from 'react';
import {recipe} from '../tempDetail';

export default class RecipeDetails extends Component {

    // constructor(props){
    //     super(props);
    //     this.state={
    //         recipe:recipe,
    //         url:'https://www.food2fork.com/api/get?key=349711cc72ab5138db9810284f664853&rId='+this.props.id
    //     }
    // }

    state={
        recipe: recipe
    }

    async componentDidMount(){
        console.log( "recipe detail id " +this.props.id);
        const id = this.props.id;
        const url ="https://www.food2fork.com/api/get?key=e56c29f6a4ff14e4c3b51699ec87b746&rId="+id;

        try{

            const data=await fetch(url);
            const jsonData =await data.json();

            console.log("json data "+ JSON.stringify(jsonData) );

            this.setState((state, props)=>{
                return {recipe:jsonData.recipe};
            },()=>{});

        }catch(err){
            console.log(err);
        }

    }


    // async componentDidMount(){
    //     try{

    //         const data=await fetch(this.state.url);
    //         const jsonData =await data.json();
    //          this.setState({
    //             recipe:jsonData.recipe
    //         });
        
    //      }catch(err){
    //         console.log(err);
    //     }
        
    // }


  render() {
     console.log(
      "recipe " + this.state.recipe
     )

        const {
            image_url,
            publisher,
            publiser_url,
            source_url,
            title,
            ingredients
        } = this.state.recipe;

        const {handleIndex} = this.props;

    return (
      <React.Fragment>
         <div className="container" >
            <div className="row" >
                <div className="col-10 mx-auto col-md-6 my-3" >
                    <button
                     type="button"
                     onClick={()=>handleIndex(1)}
                    className="btn btn-warning mb-5 text-capitalize" >
                        back to recipe list
                    </button>
                    <img src={image_url} className="d-block w-100" alt="recipe"  />
                </div>

                {/* details */}

                <div className="col-10 mx-auto col-md-6 my-3" >
                    <h6 className="text-uppercase" > {title} </h6>
                    <h6 className="text-warning text-capitalize text-slanted" >provided by {publisher}</h6>
                    <a target="_blank" href={publiser_url} className="btn btn-primary mt-2 text-capitalize" >publisher webpage</a>
                    <a target="_blank" href={source_url} className="btn btn-success mt-2 mx-3 text-capitalize" target="noopener noreferrer" >recipe url</a>
                    <ul className="list-group mt-4" >
                        <h2 className="mt-3 mb-4" >
                            Ingredients
                        </h2>
                        {
                            ingredients.map((item, index)=>{
                                return (
                                    <li key={index} className="list-group-item text-slanted" >
                                        {item}
                                    </li>
                                )
                            })
                        }
                    </ul>


                </div>

               

            </div>
         </div>
      </React.Fragment>
    )
  }
}

//1.23
