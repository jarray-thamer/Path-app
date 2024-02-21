import { Route, Routes } from "react-router-dom";
import SignUp from "./routes/authentication/signUp/SignUp";
import SignIn from "./routes/authentication/signIn/SignIn";
import ForgetPassword from "./routes/authentication/forgetPassword/ForgetPassword";
import Survey from "./routes/survey/Survey";
import Path from "./routes/path/Path";
import Admin from "./routes/admin/Admin";
import OnBoarding from "./routes/home/OnBoarding";

function App() {
  return (
    <Routes>
      <Route path="/" element={<OnBoarding />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/survey" element={<Survey />} />
      <Route path="/path/:id" element={<Path />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
