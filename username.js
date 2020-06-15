import React, { Component } from 'react'

class UserItem extends Component {
    constructor() {
        super();
        this.state = {
            id: 'id',
            login: 'mojomba',
        
            html_url: 'https://github.com/mojombo'
        }
    }
    render() {
        return (
            <div className="card text-center"> 
              <h3>{this.state.login}</h3>
              <div>
                 <a href={this.state.html_url}className="btn.btn-dark btn-sm my-1">
                     More
                     </a>
              </div>
            </div>
        )
    }
}

export default UserItem