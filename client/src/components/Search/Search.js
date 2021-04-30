import React from "react";
import { connect } from "react-redux";
import { getDogsByName } from "../../actions/index";
import{StyledSearch} from "./StyledSearch";

const Search = (props) => {
  const [state, setState] = React.useState({
    name: "",
    checked: "",
  });

  React.useEffect(() => {
    props.getDogsByName("");
  }, []);

  function handleChange(e) {
    setState({
      name: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  const { name } = state;
  return (
    <StyledSearch>
      <form className="formContainer" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">
          Name of breed or temperament :{" "}
        </label>
        <div className="search">
        <input
          type="text"
          id="name"
          autoComplete="off"
          value={name}
          onChange={(e) => handleChange(e)}
        />
        <button
          type="submit"
          onClick={() => props.getDogsByName(name)}
        >
          <i className="fas fa-search"></i>
        </button>
        </div>
      </form>
    </StyledSearch>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getDogsByName: (name) => dispatch(getDogsByName(name)),
  };
}

export default connect(null, mapDispatchToProps)(Search);
