import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control!</p>
            <button className="button" onClick={startLogin}>Login with Google</button>
            <button className="button" >Login with Twitter</button>
        </div>
    </div>
);

// const mapStateToProps = (state, props) => ({
//     auth: props.match.params.id
// });

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);