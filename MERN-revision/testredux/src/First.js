import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setM1, setM2 } from "./redux-config/MessageSlice";

function First(){
    const {m1,m2} = useSelector((store)=>store.Messages);
    const firstInput = useRef();
    const secondInput = useRef();
    const dispatch = useDispatch();
    return <>
      <hr/>
      <h1>First Component...</h1>
      {m1} : {m2}
      <br/><br/>
      <input ref={firstInput} type="text" placeholder="Enter first Message"/>
      <button onClick={()=>dispatch(setM1(firstInput.current.value))}>Update First</button>
      <input ref={secondInput} type="text" placeholder="Enter Second Message"/>
      <button onClick={()=>dispatch(setM2(secondInput.current.value))}>Update second</button>
    </>
}
export default First;