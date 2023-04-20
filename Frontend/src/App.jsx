// react
import { Route, Routes } from "react-router-dom";
// Page
import Profile from "./page/Profile.jsx";
import Error from "./page/Error.jsx";
// Recharts TEST PAGE
import Recharts from "./page/Recharts.jsx";
// style
import "./style/main.css";
import "./style/reset.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Profile />}></Route>
      {/* <Route path="/:id" element={<ProfileView />}></Route> */}
      {/* Recharts Test */}
      <Route path="/recharts" element={<Recharts />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
