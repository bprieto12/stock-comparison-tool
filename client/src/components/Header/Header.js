import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Logo from '../../containers/Logo/Logo';
import styles from './Header.module.css';

class Header extends Component {
    render () {
        return (
            <div className={styles.Header}>
                <Logo />
                <SearchBar />
            </div>
        );
    }
}

export default Header;