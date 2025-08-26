import { useSelector } from "react-redux"

function RecipeList(){
    const {recipeList} = useSelector((store)=>store.RecipeData);
    return <>
      <table className="table table-stripped">
      <thead>
        <tr>
          <td>Id</td>
          <td>Image</td>
          <td>Name</td>
        </tr>
      </thead>
      <tbody>
        {recipeList?.map((recipe,index)=>{return <tr key={recipe.id}>
            <td>{recipe.id}</td>
            <td>
              <img src={recipe.image} width="100px" height="100px" style={{borderRadius:"50%"}}/>
            </td>
            <td>{recipe.name}</td>
        </tr>})}
      </tbody>
     </table>
  
    </>
}
export default RecipeList