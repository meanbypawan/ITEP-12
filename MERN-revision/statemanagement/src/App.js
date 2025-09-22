import { useEffect, useReducer } from "react";
import axios from "axios";
import ProductDetail from "./components/ProductDetail";
/*
   "set-product"
   "delete-product"
*/
function App(){
  
  const [state,dispatch] = useReducer((state,action)=>{
    // action :- it is an object :-  {type:"set-product",payload: input-data}
    if(action.type == "set-product"){
      state.productList = action.payload;
      console.log(state.productList);
    }
    else if(action.type == "delete-product"){
      const id = action.payload;
      const index = state.productList.findIndex((product)=>{return product.id == id});
      state.productList.splice(index,1);
    }
    return {...state};
  },{
    productList: []
  });

  useEffect(()=>{
     loadProducts();
  },[]); // ComponentDidMount

  const loadProducts = async ()=>{
      let response = await axios.get("https://dummyjson.com/products");
      dispatch({type:"set-product",payload: response.data.products});
  }
  return <>
     <ProductDetail state={state} dispatch={dispatch}/> 
  
  </>
}
export default App;