import React from 'react';
import JournalEntries from './JournalEntries';
import AddJournalEntry from './AddJournalEntry';
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
        // user = { displayName: 'Brian' }
        // !user => false
        // !!user => true

        // user = null
        // !user => true
        // !!user => false
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
        // if(isSignedIn) {
        //     console.log(firebase.auth().currentUser.displayName);
        // }
        // 

        return (
            <span>
                {isSignedIn && firebase.auth().currentUser.displayName}
            </span>
        )
    }
}