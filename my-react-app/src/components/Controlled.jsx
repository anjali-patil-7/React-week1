//1.............controlled input -basic
// import { useState } from "react";

// function Controlled() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <h2>Controlled Component</h2>

//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <p>Name: {name}</p>
//     </div>
//   );
// }

// export default Controlled;

//2.............controlled checkbox
// import { useState } from "react";
// function Controlled(){
//     const [checked,setChecked] = useState(false)
//     return (
//       <div>
//         <input
//           type="checkbox"
//           checked={checked}
//           onChange={() => setChecked(!checked)}
//         />
//         <p>{checked ? "Checked" : "Not Checked"}</p>
//       </div>
//     );
// }
// export default Controlled


// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// function Layout() {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <nav>
//         <Link to="profile">Profile</Link> | <Link to="settings">Settings</Link> 
//       </nav>
//     </div>
//   );
// }

// function Profile() {
//   return <h2>Profile Page</h2>;
// }

// function Settings() {
//   return <h2>Settings Page</h2>;
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />} />
//         <Route path="profile" element={<Profile />} />
//         <Route path="settings" element={<Settings />} />
        
//       </Routes>
//     </BrowserRouter>
//   );
// }























