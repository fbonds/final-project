import React from 'react';

export default class JournalEntry extends React.Component {

    render() {
        const { entry } = this.props;
        console.log(entry.data().createdAt.toDate())

        return (
            <p style={{ listStyleType: "none", border: "1px solid black", borderRadius: "5px" }}>
                {/* <span>{entry.data().createdAt.toJSON()}</span> */}
                <span>{entry.data().name}<br /></span>
            </p>
        )
    }
}
