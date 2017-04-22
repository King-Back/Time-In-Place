import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import React from 'react';
import Hello from './containers/hello';
import reducer from './reducers/index';
import WriteProblem from './containers/write-problem';
import Login from './containers/login';
import ShowProblem from './containers/show-problem';
import showProblemMiddleware from '../middlewares/showProblemMiddleware';

const store = createStore(reducer, applyMiddleware(showProblemMiddleware));

render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={ShowProblem}/>
        <Route path="/writeProblem" component={WriteProblem}/>
        <Route path="/login" component={Login}/>
    </Router>
</Provider>, document.getElementById("content"));
