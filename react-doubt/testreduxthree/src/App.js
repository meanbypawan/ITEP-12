import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./redux-config/RecipeSlice";
import RecipeList from "./components/RecipeList";

function App(){
  const dispatch = useDispatch();
  const {recipeList} = useSelector((store)=>store.RecipeData)
  useEffect(()=>{
    loadRecipe();
  },[]);

  const loadRecipe = async()=>{
    try{
      let response = await axios.get("https://dummyjson.com/recipes");
      dispatch(setData(response.data.recipes));
    }
    catch(err){
      console.log(err);
    }
  }
  return <>
    <RecipeList/>
  </>
}

export default App;