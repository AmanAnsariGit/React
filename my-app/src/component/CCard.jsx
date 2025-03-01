import "./CCard.css";
import logo from "./logo.svg";
function Greeting(props) {
  return (
    <div className="container">
      <div className="card">
        <img src={logo} />
        <h1>Lorem ipsum</h1>
        <p>
          Lorem ipsum dolor, sit amet <br />
          consectetur adipisicing elit. Et <br />
          illum quisquam facilis?</p>
        <div className="circle-container">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "40px" }}>
          <p style={{ fontSize: "20px" }}>$45.00</p>
          <button className="btn" > Add to Cart </button>
        </div>
      </div>
    </div>
  );
}

export default Greeting;
