import React from 'react';
import firebase from 'firebase';

export default class CurrentUser extends React.Component {
    state = {
        isSignedIn: false
    }

    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            user => {
                this.setState({ isSignedIn: !!user });
            }
        );
    }

    componentWillUnmount() {
        if (this.unregisterAuthObserver) {
            this.unregisterAuthObserver();
        }
    }

    signOut = () => {
        firebase.auth().signOut();
    }

    render() {
        const { isSignedIn } = this.state;

        return (
            <span className='username'>
                {isSignedIn && firebase.auth().currentUser.displayName}<b>  </b>  
                {isSignedIn && <button onClick={this.signOut}>Sign out</button>}
            </span>
        )
    }
}