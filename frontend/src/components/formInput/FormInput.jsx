/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./FormInput-styles.css";

const FormInput = ({ icon, placeholder, label, ...otherProps }) => {
  return (
    <div className="group">
      <input placeholder={placeholder} className="form-input" {...otherProps} />
      <span className="icon hover:opacity-80">{icon}</span>
    </div>
  );
};

export default FormInput;
