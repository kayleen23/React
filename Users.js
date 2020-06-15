import React, { Component } from 'react'
import Spinner from '../layout/Spinner';
import {Repos} from '../repos';
import PropTypes from 'prop-types';
import Users from './component/users/Search';
import { Link } from 'react-router-dom';

export class User extends Component {
    componentDidMount() {
        this.props.getUsers(this.props.match.params.login);
        this.props.getUserRepo(this.props.match.params.login);
    }
}

    const Users = ({ users, loading }) => {
        if (loading) {
            return <Spinner />
        } else {
    }


    return (
        <div style={userStyle}>
            {user.map(user => (
              <UserItem key={user.id} user={user} />

            ))}
      <div className='card text-center'>
       <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px'}}
        />
        <h3>{login}</h3>

      </div>
      <a href={this.state.html_url}className="btn.btn-dark btn-sm my-1">
          More
      </a>
      </div>
      </div>

      

    state = {
        users: [
            {
                id: '1',
                login: 'mojombo',
                avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
                html_url: 'https://github.com/mojombo',
            },
            {
                id: '2',
                login: 'defunkt',
                avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
                url: 'https://api.github.com/users/defunkt',

            },
            {
                id: '3',
                login: 'pjhyett',
                avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
                url: 'https://api.github.com/users/pjhyett',
            }


        ]
    };

    render() {
        return (
            <div style={userStyle}>
                {this.state.user.map(user => (
                <UserItem key={user.id} user={user} />
                ))}
            </div>
        );
    }
}

Users.PropTypes =  {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool,
    repos: PropTypes.array.isRequired,
    getUsers: PropTypes.func.isRequired,
    getUsersRepos: PropTypes.func.isRequired,
   
};

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
};
export default Users;

