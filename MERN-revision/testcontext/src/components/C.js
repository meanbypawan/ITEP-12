import { useContext } from "react";
import { MessageContext } from "../App";

function C(){
    const {message,m1,m2} = useContext(MessageContext);
    return <>
      <h3>C component..</h3>
      <p>{message} : {m1} : {m2}</p>
    </>
}

export default C;