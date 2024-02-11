import { useState } from "react";

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../../utils/firebase/firebase";
import FormInput from "../../../components/formInput/FormInput";
import { Link } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    console.log("login successfully !");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      console.log("login successfully !");
      resetFormFields();
    } catch (error) {
      console.log("user sign in failed", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div style={{ height: "100vh" }} className="flex mx-6 justify-center">
      {/* container */}
      <div className="flex flex-col my-auto">
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
          <FormInput
            placeholder="Entre your password"
            type="password" 
            required
            onChange={handleChange}
            name="password"
            value={password}
            icon={
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.32762 7.82362C2.10396 4.09555 5.34938 1.44663 9.00004 1.44663C12.6496 1.44663 15.895 4.09555 16.6725 7.82362C16.7033 7.97156 16.7916 8.1012 16.9179 8.18403C17.0443 8.26686 17.1984 8.29609 17.3464 8.2653C17.4943 8.2345 17.6239 8.14621 17.7068 8.01982C17.7896 7.89344 17.8188 7.73934 17.788 7.5914C16.9035 3.35108 13.2039 0.308289 9.00004 0.308289C4.79614 0.308289 1.09653 3.35108 0.21204 7.5914C0.181245 7.73934 0.210479 7.89344 0.293309 8.01982C0.37614 8.14621 0.505782 8.2345 0.653717 8.2653C0.801651 8.29609 0.95576 8.26686 1.08214 8.18403C1.20852 8.1012 1.29682 7.97156 1.32762 7.82362ZM8.98866 3.72331C10.0453 3.72331 11.0587 4.14308 11.8059 4.89026C12.5531 5.63744 12.9729 6.65084 12.9729 7.70751C12.9729 8.76419 12.5531 9.77758 11.8059 10.5248C11.0587 11.2719 10.0453 11.6917 8.98866 11.6917C7.93198 11.6917 6.91859 11.2719 6.1714 10.5248C5.42422 9.77758 5.00446 8.76419 5.00446 7.70751C5.00446 6.65084 5.42422 5.63744 6.1714 4.89026C6.91859 4.14308 7.93198 3.72331 8.98866 3.72331Z"
                  fill="#6A707C"
                />
              </svg>
            }
          />

          <a
            style={{ color: "#6A707C" }}
            className="self-end font-semibold mt-4 text-sm cursor-pointer hover:opacity-85"
          >
            Forget Password?
          </a>

          {/* buttons container */}
          <div className="flex flex-wrap">
            <button
              type="submit"
              style={{ backgroundColor: "#022F5E", color: "white" }}
              className=" my-3 py-5 w-full rounded-lg self-center font-semibold hover:opacity-85"
            >
              Login
            </button>
            <button
              onClick={signInWithGoogle}
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
              to="/signup"
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
