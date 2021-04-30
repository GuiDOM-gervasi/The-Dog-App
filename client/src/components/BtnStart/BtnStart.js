import { Link } from "react-router-dom";
import { StyledBtnStart } from "./StyledBtnStart";
import img from "../../img/INDIA.JPG";
const BtnStart = () => {
  return (
    <StyledBtnStart img={img}>
      <div className="about">
        <h5>India</h5>
        <p>
          She is India, my first pet, unfortunately she is no longer here with
          me. I dedicate this web app to him so that everyone knows that she was
          the best dog in the world !!
        </p>
        <Link exact to="/dogs">
          <button>Go to home</button>
        </Link>
      </div>
    </StyledBtnStart>
  );
};

export default BtnStart;
