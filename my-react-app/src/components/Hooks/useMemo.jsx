//syntax
// const memoizedValue = useMemo(() => {
//   return calculation;
// }, [dependencies]);


//1.............prevent recalculation on re-rendering
// import { useMemo, useState } from "react";
// function Other(){
//     const [num, setNum] = useState(1)
//     const [count, setCount] = useState(0)

//     const evenOrOdd = useMemo(()=>{
//         console.log("checking even/odd")
//         return num%2 === 0 ? "even" : "odd"
//     },[num])

//  return(
//     <div>
//         <h2>Number:{num}</h2>
//         <h3>result:{evenOrOdd}</h3>

//         <button onClick={()=> setNum(count +1)}>change number</button>
//         <button onClick={()=>setCount(count+1)}>re-render({count})</button>
//     </div>
//  )


// }
// export default Other;

//2.............passing array and returing the even numbers only

// import { useMemo } from "react";
// function EvenNums({numbers}){
//   const even = useMemo(()=>{
//     return numbers.filter(val=>val%2 === 0)
//   },[numbers])

//   return(
//     <div>
//         {even.join(",")}
//     </div>
//   )
// }
// export default EvenNums;





