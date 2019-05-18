import React, { Component } from 'react';
import {recipe} from '../tempDetail';

export default class RecipeDetails extends Component {

    constructor(props){
        super(props);
        this.state={
            recipe:recipe,
            url:'https://www.food2fork.com/api/get?key=349711cc72ab5138db9810284f664853&rId='+this.props.id
        }
    }

  render() {
      console.log("data detail"+ JSON.stringify(this.state.recipe) );

        const {
            image_url,
            publisher,
            publiser_url,
            source_url,
            title,
            ingredients
        }= this.state.recipe;

    return (
      <React.Fragment>
         <div className="container" >
            <div className="row" >
                <div className="col-10 mx-auto col-md-6 my-3" >
                    <button type="button" className="btn btn-warning mb-5 text-capitalize" >back to recipe list</button>
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
