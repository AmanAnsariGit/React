import React, { useState } from "react";
import CutEye from "../component/cut-eye.jpg";
import Eye from "../component/eye.jpg";

function CustomInput(props) {
  const { label, icon, isPassword, placeholder, type } = props;
  const [isHide, setIsHide] = useState(false);
  return (
    <>
    <div style={{ textAlign: "center", padding: "0 20px" }}>
      {label && <p>{label}</p>}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "wheat",
          height: 50,
          width: 300,
          textAlign:'center',
          borderRadius:'5px'
        }}
      >
        {icon && <img src={icon} style={{ height: 20, width: 20 }} />}
        <input placeholder={placeholder} style={{ border: "none", backgroundColor: "transparent", width: "100%" }} />
        {/* <input type={isPassword ? (isHide ? "text" : "password") : "text"} /> */}
        {isPassword && (
          <div onClick={() => setIsHide((prev) => !prev)}>
            <img
              src={isHide ? Eye : CutEye}
              style={{ height: 20, width: 20 }}
              />
          </div>
        )}
      </div>
    </div>
        </>
  );
}

export default CustomInput;
