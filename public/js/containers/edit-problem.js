import {connect} from 'react-redux';
import EditProblem from '../components/edit-problem';

const mapStateToProps = (state) => {
    return {
        id: state.editProblem.problem._id,
        title: state.editProblem.problem.title,
        description: state.editProblem.problem.description,
        author: state.editProblem.problem.author,
        flag:state.editProblem.flag
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        overDisplayProblem: (id) => {
            dispatch({type: "OVER_LOAD_PROBLEM_INFO", url: id});
        },
        onUpdateProblem: (problem)=> {
            dispatch({type: "LOAD_UPDATE_PROBLEM_INFO", data: problem})
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProblem);