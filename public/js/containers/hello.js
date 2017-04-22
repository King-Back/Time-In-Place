import Hello from "../components/hello";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    console.log("state.hello="+state.hello.type);
    return {
        hello: state.hello.type
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDisplayHello: () => {
            dispatch({type: "GET_HELLO"});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);