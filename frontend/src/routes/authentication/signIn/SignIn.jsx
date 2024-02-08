import { useState } from 'react';

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../../utils/firebase/firebase';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      console.log("login successfully !");
      resetFormFields();
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <input
          placeholder='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <button type='submit'>Sign In</button>
          <button
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;