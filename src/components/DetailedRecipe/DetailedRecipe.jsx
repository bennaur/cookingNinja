import React from 'react'
import { useLocation } from 'react-router-dom'
import "./DetailedRecipe.css"
import { MdRestaurantMenu } from "react-icons/md"
import { RiHealthBookFill } from "react-icons/ri"
import { ImFire } from "react-icons/im"

const DetailedRecipe = () => {

  const location = useLocation();
  const { recipe } = location.state;

  return (
    <div className='detailedRecipe'>
      <div className="detailedRecipe--grid">
        <h3 className='inicons'>{recipe.label}</h3>
        <div className="detailedRecipe--image-cont">
          <img src={recipe.image} />
        </div>


        <div className="detailedRecipe--calories inicons">
          <div className="drflex">
            <h5>Calories: {Math.ceil(recipe.calories/4)} </h5> <ImFire className='react-icons' />
          </div>
        </div>
        <div className="detailedRecipe--ingredients inicons">
          <div className="drflex">
            <h6>Ingredients</h6> <MdRestaurantMenu className='react-icons' />
          </div>
          <ul className='detailedRecipe--ingredients-grid'>
            {recipe.ingredientLines.map((ingr, idx) => (
              <li key={idx}>{ingr}</li>))}
          </ul>
        </div>
        <div className="detailedRecipe--health inicons">
          <div className="drflex">
            <h6>Health</h6> <RiHealthBookFill className='react-icons ' />
          </div>
          <div className="health-labels">
            {recipe.healthLabels.map((hl, ix)  => (
              <span key={ix }>{hl.replace('-', ' ')}</span>
            ))}
          </div>
        </div>
      </div>






    </div>
  )
}

export default DetailedRecipe