import React from 'react';
import AddJournalEntry from './AddJournalEntry';
import firebase from 'firebase';

export default class Journal extends React.Component {
    state = {
        isSignedIn: false
    }

    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            user => {
                this.setState({ isSignedIn: !!user });

                // if (!user) {
                //     this.props.history.push('/');
                // }
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
                {isSignedIn && <AddJournalEntry />}
            </div>
        )
    }
}