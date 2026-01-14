//1..........basic syntax
// const Mycontext = React.createContext() //createcontext
// <Mycontext.provider value = {data} > //provide context
//     <compoenent/>
//     </Mycontext.provider>
//  const data = useContext(MyContext); // consume context
   

//1..............data passing from usecontext.jsx to app.jsx
// import React, { useContext } from "react";
// import React, { useContext } from "react";
// import { UserContext } from "../../App";

// function Profile() {
//   const user = useContext(UserContext);
//   return <h2>Welcome, {user}</h2>;
// }

// export default Profile;

//1............counter app using useContext
// import react, {useContext} from "react"
// import {CounterContext} from "../../App"
// function Counter (){
//     const {count, setCount} = useContext(CounterContext)

//     return(
//         <div>
//             <h2>count: {count}</h2>
//             <button onClick={()=> setCount(count + 1)}>+</button>
//         </div>
//     )
// }
// export default Counter

//2...........click count app(button click tracker or count)
// import React, { useContext } from "react";
// import { ClickContext } from "../../App";

// function Click() {
//   const { clicks, setClicks } = useContext(ClickContext);

//   return (
//     <>
//       <p>Clicked {clicks} times</p>
//       <button onClick={() => setClicks((prev) => prev + 1)}>Click</button>
//     </>
//   );
// }

// export default Click;

//3.............dark/light mode
// import React, { useContext } from "react";
// import { ThemeContext } from "../../App";

// function Theme() {
//   const { dark, setDark } = useContext(ThemeContext);

//   return (
//     <div
//       style={{
//         background: dark ? "black" : "white",
//         color: dark ? "white" : "black",
//         padding: "20px",
//       }}
//     >
//       <h3>{dark ? "Dark Mode" : "Light Mode"}</h3>
//       <button onClick={() => setDark(!dark)}>Toggle</button>
//     </div>
//   );
// }

// export default Theme;


