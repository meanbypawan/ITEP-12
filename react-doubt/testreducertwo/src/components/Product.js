function Product({data,dispatch}){
    let product = data;
    return <>
        <div className="d-flex flex-column justify-content-center align-items-center" style={{boxShadow: "10px 10px 10px grey",height:"350px"}}>
          <img src={product?.thumbnail} width="100%" height="250px"/>
          <p>{product.title}</p>
          <button onClick={()=>{dispatch({type:"delete",payload: product.id})}} className="btn btn-outline-danger" style={{width:"100%"}}>Delete</button>
         </div>
    </>
}

export default Product;