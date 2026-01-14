// const [state, dispatch] = useReducer(reducer, initialState);

//1........basic counter
import React , {useReducer} from"react";

const initialState = {count:0}

function reducer(state,action){
    switch(action.type){
        case "INCREMENT":
            return {count:state.count + 1}
        case "DECREMENT":
            return {count:state.count -1}
        case "RESET":
            return initialState
        default:
            return initialState
    }
}
function Counter(){
    const[state, dispatch] = useReducer(reducer,initialState)
    return (
      <div>
        <h2>Count:{state.count}</h2>
        <button onClick={() => dispatch({ type: "INCREMENT" })}> +</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}> -</button>
        <button onClick={() => dispatch({ type: "RESET" })}> Reset</button>
      </div>
    );
}
export default Counter
