import React from 'react';
import './Header.css';

const Header = ({title}) => {

    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: "Movies List App !"
}

export default Header;