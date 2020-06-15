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
        const updatedLikes = entry.data().likes + 1;
        if (updatedLikes) {
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