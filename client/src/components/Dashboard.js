import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        return (
            <div class="fixed-action-btn">
                <Link to="/surveys/new" class="btn-floating btn-large red">
                    <i className="large material-icons">add</i>
                </Link>
            </div>
        );
    }
}

export default Dashboard;