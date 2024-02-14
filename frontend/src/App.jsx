import { Route, Routes } from "react-router-dom";
import SignUp from "./routes/authentication/signUp/SignUp";
import SignIn from "./routes/authentication/signIn/SignIn";
import ForgetPassword from "./routes/authentication/forgetPassword/ForgetPassword";
import Survey from "./routes/survey/Survey";
import Path from "./routes/path/Path";
import Test from "./Test";

const Home = () => {
  return (
    <div>
      <h1>I am the home page !</h1>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/survey" element={<Survey />} />
      <Route path="/path" element={<Path />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default App;
