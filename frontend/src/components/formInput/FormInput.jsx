/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./FormInput-styles.css";

const FormInput = ({ icon, placeholder, label, ...otherProps }) => {
  return (
    <div className="group">
      <input placeholder={placeholder} className="form-input" {...otherProps} />
    </div>
  );
};

export default FormInput;
