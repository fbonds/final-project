import React from 'react';
import db from './db';
import firebase from 'firebase';
import { FaThumbsUp } from 'react-icons/fa'

export default class Likes extends React.Component {
    
    state = {
        isSignedIn: false,
        likesCount: 0
    }

    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            user => {
                this.setState({ isSignedIn: !!user });
                const { entry } = this.props;
                const intialLikes = entry.data().likes;
                this.setState({ likesCount: intialLikes });
            }
        );
    }

    componentWillUnmount() {
        if (this.unregisterAuthObserver) {
            this.unregisterAuthObserver();
        }
    }

    onLikeClick = (e) => {
        const { entry } = this.props;
        const myName = firebase.auth().currentUser.displayName;
        const entryName = entry.data().userName;
        const updatedLikes = entry.data().likes + 1;
        if (updatedLikes && !(myName === entryName)) {
            db
                .collection('journalEntries')
                .doc(entry.id)
                .update({ likes: updatedLikes });
                this.setState({ likesCount: updatedLikes})
        }
    }

    render() {
        const { isSignedIn } = this.state;

        return (
            <span>
                Likes: {this.state.likesCount}
                {isSignedIn && <button onClick={this.onLikeClick}><FaThumbsUp /></button>}
            </span>
        )
    }
}