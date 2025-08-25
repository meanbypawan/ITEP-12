import axios from "axios";
import { useEffect, useReducer } from "react";
import Product from "./components/Product";

function App(){
  const [state,dispatch] = useReducer((state,action)=>{
     if(action.type === "set-products" ){
      state.productList = action.payload;
     }
     else if(action.type === "delete"){
      if(window.confirm("Do you want to delete it ?")){
       let id = action.payload;
       let index = state.productList.findIndex((product)=>{return product.id == id});
       state.productList.splice(index,1);
      }
     }
     return {...state};
  },{productList: []})

  useEffect(()=>{
    loadProducts();
  },[]) // componentDidMount()
  const loadProducts = async()=>{
    try{
       let response = await axios.get("https://dummyjson.com/products");
       dispatch({type:"set-products",payload: response.data.products});
       console.log(response.data.products);
    }
    catch(err){
      console.log(err);
    }
  }
  return <>
   <div className="container mt-3">
     <div className="row">
       {state?.productList?.map((product,index)=>{return <div key="index" className="col-md-3 p-2">
         <Product data={product} dispatch={dispatch}/>
       </div>})}
     </div>
   </div>  
  </>
}

export default App;