import React from 'react';
import JournalEntries from './JournalEntries';
import firebase from 'firebase';

export default class Journal extends React.Component {
    state = {
        isSignedIn: false
    }

    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            user => {
                this.setState({ isSignedIn: !!user });

                if (!user) {
                    this.props.history.push('/');
                }
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
            <div>
                <h1>Your Kernels of Wisdom</h1>
                {/* {isSignedIn && <button onClick={this.signOut}>Sign out</button>} */}
                <hr />
                {!isSignedIn && <p>Signing in...</p>}
                {isSignedIn && <JournalEntries />}
            </div>
        )
    }
}