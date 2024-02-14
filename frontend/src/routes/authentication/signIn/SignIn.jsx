/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

import FormInput from "../../../components/formInput/FormInput";
import PasswordInput from "../../../components/formInput/PasswordInput/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formFields);
    axios
      .post("/login", formFields)
      .then((res) => {
        console.log(res);
        if (res.data === "Login successfully") {
          navigate("/survey");
          resetFormFields();
        } else {
          alert(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className=" h-lvh w-lvw flex mx-8 justify-center">
      {/* container */}
      <div className="flex flex-col my-8  max-w-96">
        <h1
          className="font-bold text-left text-3xl leading-10"
          style={{ color: "#1E232C" }}
        >
          Welcome back! Glad to see you, Again!
        </h1>
        {/* input form field */}
        <form className="flex flex-col my-8" onSubmit={handleSubmit}>
          <FormInput
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
            placeholder="Entre your email"
          />
          <PasswordInput
            placeholder="Entre your password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />

          <Link
            to={"/forgetpassword"}
            style={{ color: "#6A707C" }}
            className="self-end font-semibold mt-4 text-sm cursor-pointer hover:opacity-85"
          >
            Forget Password?
          </Link>

          {/* buttons container */}
          <div className="flex flex-wrap">
            <button
              type="submit"
              style={{ backgroundColor: "#022F5E", color: "white" }}
              className=" my-3 py-5 w-full rounded-lg self-center font-semibold hover:opacity-85"
            >
              Login
            </button>
            {/* Sign in with google button */}
            <button
              style={{ border: "1px solid #022F5E" }}
              className=" my-4 py-5 w-full rounded-lg self-center font-semibold hover:opacity-85"
            >
              <div className="flex justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.42014 14.4656L4.59739 17.537L1.59026 17.6007C0.691575 15.9338 0.181824 14.0267 0.181824 12C0.181824 10.0403 0.658429 8.19223 1.50324 6.56497H1.50389L4.18108 7.0558L5.35385 9.71692C5.10839 10.4325 4.9746 11.2007 4.9746 12C4.9747 12.8676 5.13184 13.6988 5.42014 14.4656Z"
                    fill="#FBBB00"
                  />
                  <path
                    d="M23.6117 9.79218C23.7474 10.5071 23.8182 11.2454 23.8182 12C23.8182 12.8461 23.7292 13.6714 23.5598 14.4675C22.9845 17.1766 21.4812 19.5422 19.3987 21.2162L19.3981 21.2156L16.026 21.0435L15.5488 18.0643C16.9306 17.2539 18.0105 15.9857 18.5793 14.4675H12.2598V9.79218H18.6715H23.6117Z"
                    fill="#518EF8"
                  />
                  <path
                    d="M19.3981 21.2156L19.3987 21.2163C17.3734 22.8442 14.8007 23.8182 12 23.8182C7.49938 23.8182 3.5864 21.3026 1.59029 17.6007L5.42016 14.4656C6.4182 17.1293 8.98768 19.0254 12 19.0254C13.2948 19.0254 14.5078 18.6754 15.5487 18.0643L19.3981 21.2156Z"
                    fill="#28B446"
                  />
                  <path
                    d="M19.5436 2.90259L15.715 6.03699C14.6377 5.36364 13.3643 4.97465 12.0001 4.97465C8.91953 4.97465 6.30199 6.95775 5.35395 9.71688L1.50394 6.56493H1.5033C3.47019 2.77273 7.43252 0.181824 12.0001 0.181824C14.8676 0.181824 17.4968 1.20327 19.5436 2.90259Z"
                    fill="#F14336"
                  />
                </svg>
                <span className=" ml-5">Login with Google</span>
              </div>
            </button>
          </div>
        </form>

        {/* register to link */}
        <div className="text-center mb-6">
          <p className=" font-medium text-base">
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{ color: "#5151fc" }}
              className=" font-bold text-base hover:opacity-85 cursor-pointer"
            >
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
