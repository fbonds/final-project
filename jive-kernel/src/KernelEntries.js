import React from 'react';

class KernelEntries extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            something: ''
        };
    }

    render() {
        const items = [...Array(100)].map((val, i) => `Item ${i}`);

        return(
            <ul>
                {items.map((item, i) => (<li style={{listStyle: 'none'}} key={`item_${i}`}>{ item }</li>))}
            </ul>
        )
    }
}

export default KernelEntries;