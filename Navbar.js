import React from 'react';
import ProtoTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
    return (
       <nav className='navbar bg-primary'>
           <h1>
               <i className={props.icon} />
               {prop.title}
           </h1>
       </nav>
    );
  }


    Navbar.defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    };
    Navbar.propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };
    
