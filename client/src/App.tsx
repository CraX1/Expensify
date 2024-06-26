import { Route, Routes } from "react-router-dom";
import Login from "./components/Login-Signup/Login";
import SignUp from "./components/Login-Signup/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<Home />} />

        {/*Note 1*/}
      </Routes>
      <ToastContainer position="bottom-left" className={"text-sm"} />
    </>
  );
}

export default App;

//Note-1:
// The replace prop with Navigate modifies the browser's history stack. Instead of adding a new entry, it replaces the
// current entry (the home route in this case) with the new URL (/login). This ensures that clicking the back button after
// login redirection won't bring the user back to the home route.
