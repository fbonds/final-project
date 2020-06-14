import React from 'react';
import db from './db';
import firebase from 'firebase';

export default class AddJournalEntry extends React.Component {
    state = {
        entry: '',
        isSignedIn: false,
        likeCount: 0
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



    onEntryChange = (e) => {
        this.setState({ entry: e.target.value });
    }

    addNewEntry = (e) => {
        e.preventDefault();

        db
            .collection('journalEntries')
            .add({
                name: this.state.entry,
                createdAt: new Date(),
                userName: firebase.auth().currentUser.displayName,
                likes: this.state.likeCount
            }).then(() => {
                this.setState({ entry: '' });
            });
    }

    render() {
        const { isSignedIn } = this.state;
        return (
            <div>
                {isSignedIn && 
                <form onSubmit={this.addNewEntry}>
                    <textarea
                        rows="10"
                        cols="30"
                        value={this.state.entry}
                        onChange={this.onEntryChange}
                    /><br />
                    <button type="submit">Add your Kernel of Wise Jive</button>
                </form>}
            </div>
        )
    }
}
