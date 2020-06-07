import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link> <Link to="/journal">Journal</Link>
            </div>
        )
    }
}

export default withRouter(Nav);