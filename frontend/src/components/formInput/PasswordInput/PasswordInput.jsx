/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "../FormInput-styles.css";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";

const FormInput = ({ icon, placeholder, label, ...otherProps }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState("");
  const [passwordIcon, setPAsswordIcon] = useState(VscEye);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (showPassword) {
      setInputType("text");
      setPAsswordIcon(VscEyeClosed);
    } else {
      setInputType("password");
      setPAsswordIcon(VscEye);
    }
  }, [showPassword]);

  return (
    <div className="group">
      <input
        placeholder={placeholder}
        className="form-input"
        {...otherProps}
        type={inputType}
      />
      <span className="icon hover:opacity-80" onClick={toggleShowPassword}>
        {passwordIcon}
      </span>
    </div>
  );
};

export default FormInput;
