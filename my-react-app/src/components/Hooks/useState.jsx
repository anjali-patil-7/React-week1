//1......counter 
// import {useState}from 'react'

// function Counter() {
//     const [count, setCount] = useState(0)
//   return (
//     <div>
//       <button onClick={()=> setCount(count+1)}>count {count}</button>
//     </div>
//   )
// }

// export default Counter

//2.........button to increment decrement and reset the count value 
// import { useState } from "react";

// function Counter(){
//     let initalCount = 0
//     const [count , setCount] = useState(initalCount)
//     return (
//       <div>
//         <h2> Count:{count}</h2>
//         <button onClick={() => setCount(initalCount)}>Reset</button>
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//         <button onClick={() => setCount(count - 1)}>Decrement</button>
//       </div>
//     );
// }
// export default Counter


//3..............usestate with objects
// import { useState } from "react";
// function Counter(){
//     const [name,setName] = useState({firstName:'', lastName:''})
//     return(
//         <form>
//             <input type='text' value={name.firstName} onChange={e=>setName({...name,firstName: e.target.value})}/>
//             <input type='text' value={name.lastName} onChange={e=>setName({...name,lastName: e.target.value})}/>
//             <h2>your firstname is - {name.firstName}</h2>
//             <h2>your lastname is - {name.lastName}</h2>
//         </form>
//     )
// }
// export default Counter


//4..........usestate with array
// import { useState } from "react";
// function Counter(){
//     const [items,setItems] = useState([])

//     const addItem = ()=>{
//         setItems([...items,{
//             id:items.length,
//             value  :Math.floor(Math.random() * 10) + 1
//         }])
//     }
//     return(
//         <div>
//             <button onClick={addItem}>Add a number</button>
//             <ul>
//                 {items.map(item =>(
//                     <li key={item.id}>{item.value}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
// export default Counter

//5..........usetstate using prev state and object
// import React, { useState } from "react";

// function Profile() {
//   const [user, setUser] = useState({
//     name: "Anjali",
//     age: 22,
//   });

//   const increaseAge = () => {
//     setUser((prevUser) => ({
//       ...prevUser, // copy previous state
//       age: prevUser.age + 1, // update only age
//     }));
//   };

//   return (
//     <div>
//       <h3>Name: {user.name}</h3>
//       <h3>Age: {user.age}</h3>
//       <button onClick={increaseAge}>Increase Age</button>
//     </div>
//   );
// }

// export default Profile;



// //6.........all 3 lifecycle methods
// import React, { useEffect, useState } from "react";

// function LifeCycleDemo() {
//   const [count, setCount] = useState(0);

//   // componentDidMount → runs once when component loads
//   useEffect(() => {
//     console.log("Component Mounted");

//     return () => {
//       // componentWillUnmount → runs when component is removed
//       console.log("Component Unmounted");
//     };
//   }, []);

//   // componentDidUpdate → runs when count changes
//   useEffect(() => {
//     if (count > 0) {
//       console.log("Component Updated - count changed");
//     }
//   }, [count]);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }

// export default LifeCycleDemo;




