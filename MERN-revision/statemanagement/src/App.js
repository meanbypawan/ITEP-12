import { useEffect, useReducer } from "react";
import axios from "axios";
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
     <table className="table table-stripped">
      <thead>
        <tr>
          <td>Id</td>
          <td>Image</td>
          <td>Title</td>
          <td>Remove</td>
        </tr>
      </thead>
      <tbody>
        {state?.productList?.map((product,index)=>{return <tr key={product.id}>
            <td>{product.id}</td>
            <td>
              <img src={product.thumbnail} width="50px" height="50px"/>
            </td>
            <td>{product.title}</td>
            <td className="btn btn-outline-danger" onClick={()=>dispatch({type:"delete-product",payload: product.id})}>Delete</td>
        </tr>})}
      </tbody>
     </table>
  </>
}
export default App;