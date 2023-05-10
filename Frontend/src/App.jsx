// react
import { Route, Routes } from "react-router-dom";
// Page
import Profile from "./page/Profile.jsx";
import Error from "./page/Error.jsx";
// style
import "./style/main.css";
import "./style/reset.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Profile />}></Route>
      <Route path="/user/:id" element={<Profile />}></Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
