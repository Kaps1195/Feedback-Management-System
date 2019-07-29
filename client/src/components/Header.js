import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                    return;
            case false:
                    return <li><a href="/auth/google">LOGIN WITH GOOGLE</a></li>;
            default: 
                    return <li><a href="/api/logout">LOGOUT</a></li>;
        }
    }
    render() {
       // console.log(this.props.auth);
        return (
            <nav>
                <div className="nav-wrapper teal lighten-2">
                    <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">Emaily</Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps)(Header);