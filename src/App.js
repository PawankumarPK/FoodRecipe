import React, { useEffect, useState, Component } from 'react'
import Recipe from "./Recipe"
import './App.css';

const App = () => {
  const APP_ID = "2bc15c26"
  const APP_KEY = "76f3c83062d2dd81480e0c336e5b996a"
  const [recipe, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getReceips()
  }, [query])

  const getReceips = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      //"http://localhost:8081/get_stats"
    )
    const data = await response.json()
    setRecipes(data.hits)
    this.state.showMe = false
    console.log(data.hits)

  }

  const updateSearch = e => {
    setSearch(e.target.value)
    console.log(search)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">

        <label className="label">Jetbrain Console</label>

        <input className="search-bar" placeholder="Search..." type="text" value={search}
          onChange={updateSearch} />
        <button className="search-button" type="submit">
          Submit
        </button>
      </form>

      <div className="recipes">
        {recipe.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            //calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  )


}

export default App;
