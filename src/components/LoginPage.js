import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';

export class LoginPage extends React.Component {
    googleLogin = () => {
        this.props.startLogin(googleAuthProvider)
    };

    facebookLogin = () => {
        this.props.startLogin(facebookAuthProvider)
    }

    render() {
        return (
            <div className={"box-layout"}>
                <div className={"box-layout__box"}>
                    <h1 className={"box-layout__title"}>Expensify</h1>
                    <p>It's time to get your expenses under control.</p>
                    <button className={"button button--blue"} onClick={this.googleLogin}>Login with Google</button>
                    <button className={"button button--blue"} onClick={this.facebookLogin}>Login with Facebook</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: (provider) => { dispatch(startLogin(provider)) }
});

export default connect(undefined, mapDispatchToProps)(LoginPage);