import React, { Component } from 'react';
import Navbar from './Navbar';
import UserItem from './User/username';
import './Sapp.css';

class Sapp extends Component {
    render() {
        return (
            <div className='Sapp'>
                <Navbar />
                <UserItem />

                
            </div>
        );
    }
}

export default Sapp;
