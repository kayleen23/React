import React from 'react';
import ProTypes from 'prop-types';
import RepoItems from './RepoItem';

 const Repo = ({ repos }) => {
    return repos.map(repo => <RepoItem repo= {repo} key={repo.id} />)
   
}

Repos.propTypes = {
    repos: propTypes.array.isRequired

}

export default Repos
