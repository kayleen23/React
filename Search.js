import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = ({ setAlert }) => {
    const githubContext = useContext(githubContext);

    const [text, setText] = userState('');

    const onSubmit = e => {
        e.preventDefault():
        if (text === '') {
            setAlert('Please enter something', 'light');
        } else {
            githubContext.serchesUsers(text);
            setText ('');
        }
    };
}


export class Search extends Component {
    state = {
        text:''
    };

    onSubmit(e) {
        console.log(this.state.text);
    }
    onChange = e => this.setState({ [e.target.name] e.target.value });

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)} className='form'>
                    <input 
                    type='text'
                     name='email' 
                     placeholder='Search Users...'
                    value={this.state.text}
                    onChange={this.onChange}
                    />
                    <input type='submit'
                     value='Search'
                     className='btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}

export default Search
