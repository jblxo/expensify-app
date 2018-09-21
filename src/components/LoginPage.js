import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { googleAuthProvider, facebookAuthProvider, twitterAuthProvider, githubAuthProvider } from '../firebase/firebase';

export class LoginPage extends React.Component {
    googleLogin = () => {
        this.props.startLogin(googleAuthProvider)
    };

    facebookLogin = () => {
        this.props.startLogin(facebookAuthProvider)
    }
    
    twitterLogin = () => {
        this.props.startLogin(twitterAuthProvider)
    }

    githubLogin = () => {
        this.props.startLogin(githubAuthProvider)
    }

    render() {
        return (
            <div className={"box-layout"}>
                <div className={"box-layout__box"}>
                    <h1 className={"box-layout__title"}>Expensify</h1>
                    <p>It's time to get your expenses under control.</p>
                    <button className={"button button--blue"} onClick={this.googleLogin}>Login with Google</button>
                    <button className={"button button--facebook"} onClick={this.facebookLogin}>Login with Facebook</button>
                    <button className={"button button--twitter"} onClick={this.twitterLogin}>Login with Twitter</button>
                    <button className={"button button--github"} onClick={this.githubLogin}>Login with GitHub</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: (provider) => { dispatch(startLogin(provider)) }
});

export default connect(undefined, mapDispatchToProps)(LoginPage);