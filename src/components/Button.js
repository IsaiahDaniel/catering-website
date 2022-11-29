import React from "react";
import PropTypes from "prop-types";
import { BsArrowRight } from "react-icons/bs";


const Button = ({ text, light, dark, buttonType, icon }) => {

  if (light) {
    return (
        <div  className="bg-white text-black pl-8 pr-8 pt-5 pb-5 flex items-end justify-center hover:bg-[#fcb900]">
            <button type={buttonType} className="mr-3">{text}</button>
            { icon && <BsArrowRight size={20} color="#333" /> }
        </div>
    );
  }

  if (dark) {
    return (
        <div  className={`bg-[#0A2117] text-white pl-8 pr-8 pt-5 pb-5 flex items-end justify-center hover:bg-[#fcb900]`}>
            <button type={buttonType} className="mr-3">{text}</button>
            { icon && <BsArrowRight size={20} color="#333" /> }
        </div>
    );
  }

  return (
    <div className="bg-[#418043] hover:bg-[#fcb900]  pl-8 pr-8 pt-5 pb-5 text-white flex items-end justify-center">
        <button type={buttonType} className="mr-3">{text}</button>
        { icon && <BsArrowRight size={20} /> }
    </div>
  )
  
};

Button.defaultProps = {
  buttonType: "button",
};

Button.prototypes = {
    light: PropTypes.bool.isRequired
}

export default Button;
