import React from 'react';
import Likes from './Likes';

export default class JournalEntry extends React.Component {

    render() {
        const { entry } = this.props;
        const createDate = entry.data().createdAt.toDate().toString();
        
        return (
            <p style={{ listStyleType: "none", border: "1px solid black", borderRadius: "5px" }}>
                <span><i>{createDate}</i><br /><b>{entry.data().userName} said:<br></br></b>{entry.data().name}<br></br><Likes  key={entry.id} entry={entry} /></span>
            </p>
        )
    }
}
