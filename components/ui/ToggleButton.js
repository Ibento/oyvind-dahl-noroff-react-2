import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clickButton } from "../../redux/actions";
import StyledButton from "./StyledButton"

const mapStateToProps = (state) => {
    return {
        bgColor: state.button.buttonIsOn ? "red" : "green"
    };
  };


function ToggleButton({clickButton}, props) {

    const style = {
        backgroundColor : props.bgColor
    }
   
    return <StyledButton onClick={() => clickButton()} style={style} >Toggle</StyledButton>;
}

export default connect(mapStateToProps,{clickButton})(ToggleButton)