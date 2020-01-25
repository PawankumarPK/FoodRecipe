import React from "react";


const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className="recipe">
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className="image" src={image} alt=""></img>
        </div>
    )
}

export default Recipe