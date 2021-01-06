import React, {useState, useEffect} from "react"
import './App.css';
import Axios from "axios"
import Recipes from "./Recipes"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardGroup, InputGroup, Input, InputGroupAddon, InputGroupText, Form
} from "reactstrap"
const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [ingridients, setIngridients] = useState([]);
  const [recipevalue, setRecipevalue] = useState("");
  const [query, SetQuery] = useState("chicken");
  const app_id = "c8d52881";
  const api_key = "3c14ade39fa88e3e30b199511cfdacf6";
  const a = 5;
  const url = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${api_key}&from=0&to=100&calories=591-722&health=alcohol-free`
  const fetchData = async () => {
    const {data} = await Axios.get(url);
    setRecipes(data.hits);
    setIngridients(recipes.ingredientLines)
    console.log(recipes);
    console.log(data.hits);
    //console.log(recipes[0].ingredients?.text);
  }

  useEffect(() => {
    fetchData();
  }, [query])
 
  const HandleSubmit = e => {
    e.preventDefault();
    SetQuery(recipevalue);
    setRecipevalue("");   
  }
  return (
    <div className = "App">
      
      <form onSubmit = {HandleSubmit} className = "form-submit">
        <input placeholder = "serach for recipes" 
          value = {recipevalue}
          onChange = {(e) => setRecipevalue(e.target.value)}
          className = "search-box"
        />
        <button className = "search-button">search</button>
      </form>
      <div className = "recipe">
        {recipes.map((item, index) => (
          <Recipes title = {item.recipe.label} image = {item.recipe.image} ingredients = {item.recipe.ingredients}/>
        ))}
      </div>
    </div>
  );
}

export default App;
