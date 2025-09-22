function ProductDetail({state,dispatch}){
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

export default ProductDetail;