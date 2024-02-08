
import { Route, Routes} from "react-router-dom";
import SignUp from "./routes/authentication/signUp/SignUp";
import SignIn from "./routes/authentication/signIn/SignIn";

const Home = () => {
  return (
  <div>
    <h1>I am the home page !</h1>
  </div>
)}

function App() {

  return (
   <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />

   </Routes>
  )
}

export default App
