import React, { Component } from 'react';
import './Sapp.css';
import axios from 'axios';
import './app.css';

const App = () => {
  const [users, setuser] = useState([]);
  const [user, setuser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading,setLoading] = false([]);
  const [alert, setAlert] = useState(null);
}

  const res = await axios.get()
state={
  users: [],
  user:{},
  repos: [],
  loading: false,
  alert: null
};

class Sapp extends Component {
    render () {

        const name = 'Kayleen'
        const loading = false;
        const showName = true;
        return (
            <div className='Sapp'>
        {loading ? <h4>loading...</h4> : <h1>Hello from {name}</h1>}
     </div>
    );
  }
}
export default Sapp;